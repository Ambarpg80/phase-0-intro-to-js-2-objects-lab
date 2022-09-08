// Write your solution in this file!
const employee = {
    name: "Petra",
    streetAddress: '1234 Sesame St' ,
};


function updateEmployeeWithKeyAndValue(employee, key, value){
    const employees = {...employee};
    employees[key] = value;
    return employees;
};
updateEmployeeWithKeyAndValue()

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const deletedEmployees = {...employee};
    delete deletedEmployees[key];
    return deletedEmployees;
};

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key] ;
    return employee;
}
/**/