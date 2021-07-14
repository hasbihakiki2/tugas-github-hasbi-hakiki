const employees = require('./employees.js')

function totalSalaryDepartments(employees, departmentId){
    let x = 0;

    for (let i = 0; i < employees.length; i++) {
        let name = employees[i].first_name;
        let department = employees[i].department_id;
        if(departmentId === department){
            x++
        }
    }
    console.log(`Total Employees : ${x}`);
}

    
totalSalaryDepartments(employees, 9)