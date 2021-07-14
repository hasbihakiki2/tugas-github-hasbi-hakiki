const employees = require('./employees.js')

function searchEmployee(employees, prefix){
    let id = 0;
    for (let i = 0; i < employees.length; i++) {
        let firstName = employees[i].first_name;
        let lastName = employees[i].Last_name;
    
    for (let j = 0; j < firstName.length; j++) {
        if(prefix === firstName[j]){
            id++;
            console.log(`${id}. ${firstName} ${lastName}`)
        }
    }
    }
}

    
searchEmployee(employees, "D")