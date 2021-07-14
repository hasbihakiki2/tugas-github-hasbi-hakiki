const employees = require('./employees.js')

function salaryRange(employees, minSalary, maxSalary){
    for (var i = 0; i < employees.length; i++) {
        let namaKaryawan = employees[i].first_name;
        let gajiKaryawan = +employees[i].salary;

    if (gajiKaryawan >= minSalary && gajiKaryawan <= maxSalary){
        console.log(`${namaKaryawan} Rp. ${gajiKaryawan}`)
    }
    }
}

salaryRange(employees, 24000, 48000)