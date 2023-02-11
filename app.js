`use strict`

function Employee(employeeID, fullName, department, level, imageURL, salary){
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = "Administration" || "Marketing" || "Development" || "Finance";
    this.level = "Junior" || "Mid-Senior" || "Senior";
    this.imageURL = imageURL;
    this.salary = this.calculate();
    return `${this.render()}`
}

Employee.prototype.calculate=function(){
    if (this.level =="Senior"){
        return (Math.random() * (2000 - 1500	) + 1500) - 7.5 ;
    }
    else if (this.level =="Mid-Senior"){
        return (Math.random() * (1500 - 1000	) + 1000) - 7.5 ;
    }
    else if (this.level =="Junior"){
        return (Math.random() * (1000 - 500	) + 500) - 7.5;
    }

} 


Employee.prototype.render =function(){
    document.write(`${this.fullName} <br> salary = ${this.salary}`)
}

let lana = new Employee(1001, "Lana Ali", "Finance", "Senior");
console.log(lana);
