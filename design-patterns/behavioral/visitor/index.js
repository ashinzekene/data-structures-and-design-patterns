function Manager() {
  this.salary = 800000;
  this.experience = 5;
  this.leaveDays = 20;
}
Manager.prototype.accept = function (visitor) {
  return visitor.visit(this);
};

function IncreaseSalaryVisitor() {}
IncreaseSalaryVisitor.prototype.visit = function (manager) {
  manager.salary *= 1.5;
};

function IncreaseExperienceVisitor() {}
IncreaseExperienceVisitor.prototype.visit = function (manager) {
  manager.experience += 3;
};

function DecreaseLeaveVisitor() {}
DecreaseLeaveVisitor.prototype.visit = function (manager) {
  manager.leaveDays -= 5;
};

const generalManager = new Manager();
const increaseSalary = new IncreaseSalaryVisitor();
const increaseExperience = new IncreaseExperienceVisitor();
const decreaseLeave = new DecreaseLeaveVisitor();
console.log('Salary', generalManager.salary);
console.log('Experience', generalManager.experience);
console.log('LeaveDays', generalManager.leaveDays);
generalManager.accept(increaseSalary);
generalManager.accept(increaseExperience);
generalManager.accept(decreaseLeave);
console.log('Salary', generalManager.salary);
console.log('LeaveDays', generalManager.leaveDays);
console.log('Experience', generalManager.experience);
