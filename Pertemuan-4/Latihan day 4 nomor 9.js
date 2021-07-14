const employees = require('./employees.js')

function salaryMinMax(employees){
    let max = 36000;
    let min = 24000;
    for (let i = 0; i < employees.length; i++) {
        let gaji = +employees[i].salary
        if(gaji > max){
            max = gaji;
        console.log(`Max salary Rp. ${max}`)
        console.log(`Min salary Rp. ${min}`)
        }  
    }
}

salaryMinMax(employees)