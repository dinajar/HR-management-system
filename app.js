`use strict`

function Employee( fullName, department, level, imageURL){
    
    this.fullName = fullName;
    this.department =department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = this.calculate();
    this.employeeID = this.idNumber();
    
   
}


Employee.prototype.calculate=function(){
    let value = 0 ;
    if (this.level =="Senior"){
        value = (Math.random() * (2000 - 1500) + 1500 ) ;
        return Math.floor(value - (value * 7.5 /100));
    }
    else if (this.level =="Mid-Senior"){
        value = (Math.random() * (1500 - 1000	) + 1000)  ;
        return Math.floor( value - (value * 7.5 /100));
    }
    else if (this.level =="Junior"){
        value = (Math.random() * (1000 - 500	) + 500) ;
        return Math.floor( value - (value * 7.5 /100));
    }

}



Employee.prototype.idNumber =function(){
    let uniqueId = new Set();
    while (true) {
        let employeeId = Math.floor(Math.random() * 9000) + 1000;
        if (!uniqueId.has(employeeId)){
            uniqueId.add(employeeId);
            return employeeId;
        }
        
    }

}
    

 


Employee.prototype.render =function(){
    
    
    const container = document.getElementById('secId')
    console.log(container)

    const divEl = document.createElement('div');
    container.appendChild(divEl);

    
    const hr1El = document.createElement('hr');
    divEl.appendChild(hr1El);



    const imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src',this.imageURL);
    imgEl.width="250";
    imgEl.height="250";





    const nameId = document.createElement('div')
    divEl.append(nameId);

    const nameEl = document.createElement('p');
    nameId.append(nameEl);
    const numberEl = document.createElement('p');
    nameId.appendChild(numberEl);


    nameId.textContent = `Name: ${this.fullName} - ID: ${this.idNumber()}`;
    


    const depLev = document.createElement('div')
    divEl.append(depLev);

    const departmentEl = document.createElement('p');
    depLev.append(departmentEl);
    const levelEl = document.createElement('p');
    depLev.append(levelEl);


    depLev.textContent = `Department:  ${this.department} - Level: ${this.level}`;





    const salaryEl = document.createElement('h4');
    divEl.appendChild(salaryEl);
    salaryEl.textContent = this.salary;




    const hrEl = document.createElement('hr');
    divEl.appendChild(hrEl);


}




let HRform = document.getElementById("formId");
HRform.addEventListener("submit", formHandler );

function formHandler(event){
    event.preventDefault();
    let fullName = event.target.name.value;
    let department = event.target.selectDep.value;
    let level = event.target.selectLev.value;
    let imgUrl = event.target.imgUrl.value;

    let newEmployee = new Employee(fullName,department,level,imgUrl);
    newEmployee.render();



}
