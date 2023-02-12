`use strict`

function Employee(employeeID, fullName, department, level, imageURL, salary){
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department =this.dep(department);
    this.level = this.lev(level);
    this.imageURL = imageURL;
    this.salary = this.calculate();
    return `${this.render()}`
}

Employee.prototype.dep=function(department){
   if (department == "Administration"){
    return `Administration`
   }
   else if (department == "Marketing"){
    return `Marketing`
   }
   else if (department == "Development"){
    return `Development`
   }
   else if (department == "Finance"){
    return `Finance`
   }
}

Employee.prototype.lev=function(level){
    if (level == "Junior"){
        return `Junior`
       }
       else if (level == "Mid-Senior"){
        return `Mid-Senior`
       }

       else if (level == "Senior"){
        return `Senior`
       }
}

Employee.prototype.calculate=function(){
    let value = 0 ;
    if (this.level =="Senior"){
        value = (Math.random() * (2000 - 1500) + 1500 ) ;
        return value - (value * 7.5 /100);
    }
    else if (this.level =="Mid-Senior"){
        value = (Math.random() * (1500 - 1000	) + 1000)  ;
        return value - (value * 7.5 /100);
    }
    else if (this.level =="Junior"){
        value = (Math.random() * (1000 - 500	) + 500) ;
        return value - (value * 7.5 /100);
    }
    

} 


Employee.prototype.render =function(){
    document.write(`${this.fullName} <br> salary = ${this.salary}`)
}


let lana = new Employee(1001, "Lana Ali", "Finance", "Senior");
console.log(lana);
