const employees = require('./employees.js')

function totalSalary(employees){
    let x = 0;

    for (let i = 0; i < employees.length; i++) {
        let salary = +employees[i].salary;
        x= x+salary
    }
    console.log(`Total salary employees : Rp. ${x}`)
}

    
totalSalary(employees)