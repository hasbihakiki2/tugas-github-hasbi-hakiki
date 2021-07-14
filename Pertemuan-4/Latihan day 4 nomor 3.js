const employees = [
    {
        employee_id : 100,
        first_name : "Steven",
        Last_name : "King",
        email: "Steven.king@sqltutorial.org",
        phone_number : "515.123.4567",
        hire_date : "1987-06-17",
        dateof_birth : "1985-01-02",
        job_id : 4,
        salary : "24000.00",
        manager_id : null,
        department_id : 9,
        employee_images : 
        [
            {
                epim_id : 27,
                epim_filename : "after order.jpg",
                epim_path: "/uploads/after order.jpg",
                epim_primary : false,
                epim_employee_id : 100
            },
            {
                epim_id : 26,
                epim_filename : "cangkir jadul.jpg",
                epim_path: "/uploads/cangkir jadul.jpg",
                epim_primary : false,
                epim_employee_id : 100   
            }
        ]
    },
    {
        employee_id : 105,
        first_name : "Danish",
        Last_name : "Puth",
        email: "danish.puth@sqltutorial.org",
        phone_number : "123.321.0987",
        hire_date : "1995-02-17",
        dateof_birth : "1990-03-04",
        job_id : 1,
        salary : "28000.00",
        manager_id : null,
        department_id : 7,
        employee_images : 
        [
            {
                epim_id : 29,
                epim_filename : "lunch break.jpg",
                epim_path: "/uploads/lunch break.jpg",
                epim_primary : false,
                epim_employee_id : 105
            },
            {
                epim_id : 28,
                epim_filename : "smile.jpg",
                epim_path: "/uploads/smile.jpg",
                epim_primary : false,
                epim_employee_id : 105
            }
        ]
    },
    {
        employee_id : 103,
        first_name : "Evelyn",
        Last_name : "Janne",
        email: "evelynjanne@sqltutorial.org",
        phone_number : "456.654.7654",
        hire_date : "1994-12-17",
        dateof_birth : "1986-02-04",
        job_id : 4,
        salary : "32000.00",
        manager_id : null,
        department_id : 5,
        employee_images :
        [
            {
                epim_id : 31,
                epim_filename : "chizz.jpg",
                epim_path: "/uploads/chizz.jpg",
                epim_primary : false,
                epim_employee_id : 103   
            },
            {
                epim_id : 30,
                epim_filename : "graduation.jpg",
                epim_path: "/uploads/graduation.jpg",
                epim_primary : false,
                epim_employee_id : 103
            }
        ] 
    },
    {   
        employee_id : 101,
        first_name : "Lim",
        Last_name : "Tae",
        email: "Lim.tae@sqltutorial.org",
        phone_number : "890.765.5432",
        hire_date : "1994-05-17",
        dateof_birth : "1980-03-04",
        job_id : 4,
        salary : "36000.00",
        manager_id : null,
        department_id : 9,
        employee_images : 
        [
            {
                epim_id : 32,
                epim_filename : "after dinner.jpg",
                epim_path: "/uploads/after dinner.jpg",
                epim_primary : false,
                epim_employee_id : 101
            },
            {
                epim_id : 31,
                epim_filename : "pose it.jpg",
                epim_path: "/uploads/pose it.jpg",
                epim_primary : false,
                epim_employee_id : 101
            }
        ]
    }
]

function hireRangeDate(employees){
    let hireDate = employees.filter((x)=> {if(x.hire_date >= "1993-01-12" && x.hire_date <= "1995-12-12") {return x}})
    return hireDate
}

    
console.log(hireRangeDate(employees))