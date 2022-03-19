let employee = {
    name: 'Sam' ,
    streetAdress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee) {
    return {name: 'Sam' , streetAddress: '11 Broadway'};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee) {
    employee.name = 'Sam'
    employee.streetAddress = '12 Broadway'
    return (employee)
}

function  deleteFromEmployeeByKey(employee) {
    const newEmployee = {employee};
    delete newEmployee.name;
    return (newEmployee)
}


function destructivelyDeleteFromEmployeeByKey(employee) {
    delete employee.name;
    return employee
}