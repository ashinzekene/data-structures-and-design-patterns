# Composite

This is a structural design pattern that composes objects in a tree based structure to represent part or whole hierarchy. It makes it non-trivial to initiate complex, recursive behaviors on objects with a single command. 

This pattern consists of four participants:
- Component - this declares the interface for the objects in the composition and provides methods of assessing and managing child components
- Composite - stores child components and implements child related operations. At least one child is present
- Leaf - implements behaviors of primitive objects. It does not posses child components
- Client - this manipulates tne objects in the composition through the component interface

```js
function Employee(id, name, salary) {
  this.name = name;
  this.salary = salary;
  this.id = id;
}
Employee.prototype.getDetails = function () {
  const {name, salary, id} = this;
  return `${name} with ID:${id} earns $${salary}`;
};

function Manager(name, salary) {
  this.name = name;
  this.salary = salary;
  this.employees = [];
}
Manager.prototype.getDetails = function () {
  const {name, salary, employees} = this;
  let details = '';
  details += `Manager: ${name}, with a ${salary} has ${employees.length} staff\n`;
  for (const employee of employees) {
    details += '  ' + employee.getDetails().split('\n') + '\n';
  }
  return details;
};
Manager.prototype.addEmployee = function (employee) {
  this.employees.push(employee);
};
Manager.prototype.removeEmployee = function (empToRemove) {
  this.employees = this.employees.filter(employee => employee !== empToRemove);
};

const genManager = new Manager('Ashinze Ekene', 2332000);
const devManager = new Manager('Developer Manager', 1332000);
const developer1 = new Employee('DEV-001', 'Ashinze Ekene', 140000);
const developer2 = new Employee('DEV-003', 'Adui Senghai', 110000);
const developer3 = new Employee('DEV-002', 'Unde Osdkao', 40000);
developer2.getDetails();
devManager.addEmployee(developer1);
devManager.addEmployee(developer2);
devManager.addEmployee(developer3);
genManager.addEmployee(devManager);
devManager.getDetails();
genManager.getDetails();

```
