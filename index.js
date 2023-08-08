// Write your solution in this file!
let employee = {
  name: "John Doe",
  streetAddress: "123 Main Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Non-destructive updates
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
console.log(updatedEmployee);

const deletedEmployee = deleteFromEmployeeByKey(employee, "streetAddress");
console.log(deletedEmployee);


// Destructive updates
destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Alex Smith");
console.log(employee);

destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log(employee);