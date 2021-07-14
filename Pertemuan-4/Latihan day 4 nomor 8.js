const employees = require('./employees.js')

function totalEmployeeById(employees, job_Id){
    let employee = 0;
    for (i = 0; i < employees.length; i++){
        let jobId = employees[i].job_id;
        if (job_Id===jobId){
            employee++
        }
        console.log (`Total Employees by job id ${job_Id} is : ${employee}`)
    }
}
totalEmployeeById(employees, 1)
