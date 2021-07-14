const employees = require('./employees.js')

function totalSalaryDepartments(employees, departmentId){
    let x = 0;

    for (let i = 0; i < employees.length; i++) {
        let salary = +employees[i].salary;
        let department = employees[i].department_id;
        if(departmentId === department){
            x += salary
        }
    }
    console.log(`Total salary employees by department : Rp. ${x}`)
}

    
totalSalaryDepartments(employees, 9)