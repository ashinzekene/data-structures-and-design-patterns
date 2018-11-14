# Strategy Pattern

This defines a set of algorithms similar algorithms that can be used interchangably by classes. The strategy object changes the exeection algorithm of the the context object

## Participants

- Strategy - this is the interface implemented by all supported algorithms. Context uses this interface to call the algorithm defined in the ConcreteStrategy. 
- ConcreteStrategy - this implements the Stratey interface and defines its custom algorithm to be used by Context;
- Context - configures/defines a specific strategy to use

```js
// Concrete Strategy
function Add() {}
Add.prototype.operate = function (x, y) {
  return x + y;
};
function Subtract() {}
Subtract.prototype.operate = function (x, y) {
  return x - y;
};
function Divide() {}
Divide.prototype.operate = function (x, y) {
  return x / y;
};
function Multiply() {}
Multiply.prototype.operate = function (x, y) {
  return x * y;
};

// Context
function Operation() {
  this.strategy = new Add();
}
Operation.prototype.execute = function (x, y) {
  return this.strategy.operate(x, y);
};
Operation.prototype.setStrategy = function (strategy) {
  this.strategy = strategy;
};

const myOperation = new Operation();
console.log('Add operation between 3, 6 =>', myOperation.execute(3, 6));

myOperation.setStrategy(new Subtract());
console.log('Subtract operation between 3, 6 =>', myOperation.execute(3, 6));

myOperation.setStrategy(new Divide());
console.log('Divide operation between 3, 6 =>', myOperation.execute(3, 6));

myOperation.setStrategy(new Multiply());
console.log('Multiply operation between 3, 6 =>', myOperation.execute(3, 6));

```