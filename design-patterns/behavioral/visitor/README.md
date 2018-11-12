# Visitor pattern

It is a type of behavioural pattern where a new functionality can be added a class/object. Also the execution of this operation can also be changed by changing the its visitor;

## Participants
- Visitor - This is an interface with a visit methods which all visitors implement. It is used to declare the visit operations for all the types of visitable classes
- ConcreteVisitor - This is implements the `Visitor` interface and impements its visit method for its own specific operation
- Visitable - an interface which implements the accept operation, It provides an entry point for visitors to 'visit' it
- ConcreteVisitable - This are classes which implement the `Visitable` interface.  It defines its own method for accepting a visitor as an argument and calls the visit method on it.

```js
function AppLogger() {}
AppLogger.prototype.logAge = function (visitor) {
  return visitor.visit(this.age);
};
AppLogger.prototype.setAge = function (age) {
  this.age = age;
};

function SimpleLogger() {}
SimpleLogger.prototype.visit = function (age) {
  return age;
};

function ComplexLogger() {}
ComplexLogger.prototype.visit = function (age) {
  return 'Age is ' + age;
};

function VerboseLogger() {}
VerboseLogger.prototype.visit = function (age) {
  return 'The age requested is' + age;
};

const myAppLogger = new AppLogger();
const simpleLogger = new SimpleLogger();
const complexLogger = new ComplexLogger();
const verboseLogger = new VerboseLogger();
myAppLogger.setAge('28');
myAppLogger.logAge(simpleLogger);
myAppLogger.logAge(complexLogger);
myAppLogger.logAge(verboseLogger);

```