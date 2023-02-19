`use strict`



function render() {

    let output = gitEmployee();
    let firstRow = ["Department", "# of employees", "Total Salary", "Average"];
    let dep = ["Administration", "Marketing", "Development", "Finance"];


    const container = document.getElementById('section')
    console.log(container);


    const tableEl = document.createElement('table');
    container.appendChild(tableEl);


    const tr1El = document.createElement('tr');
    tableEl.appendChild(tr1El);



    for (let w = 0; w < firstRow.length; w++) {
        const thEl = document.createElement('th');
        tr1El.appendChild(thEl);
        thEl.textContent = firstRow[w];

        const hrEl = document.createElement('hr');

    }

    

    


    for (let i = 0; i < dep.length; i++) {
        
        const trEl = document.createElement('tr');
        tableEl.appendChild(trEl);

        const td1El = document.createElement('td');
        td1El.textContent = dep[i];
        trEl.appendChild(td1El);

        let count = 0;
        let totalSalary = 0;

        for (let j = 0; j < output.length; j++) {
            if (output[j].department === dep[i]) {
                count++;
                totalSalary += output[j].salary;
            }
        }

        const td2El = document.createElement('td');
        td2El.textContent = count;
        trEl.appendChild(td2El);

        const td3El = document.createElement('td');
        td3El.textContent = totalSalary;
        trEl.appendChild(td3El);

        const td4El = document.createElement('td');
        const avgSalary = totalSalary / count;
        td4El.textContent = avgSalary;
        trEl.appendChild(td4El);



        
    }












}

function gitEmployee() {
    let toJs = localStorage.getItem("employee");
    output = JSON.parse(toJs);

    return output;
}

render();