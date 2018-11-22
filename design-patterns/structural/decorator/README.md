# Decorator pattern

This is a structural design pattern that adds new  functionality or behavior to an already existing class or method. It wraps the already existent class/object and modifies it methods or/and adds new methods or/and properties to it. It does not change the API of the exisiting class.

```js
function Shape(shape) {
  this.shape = shape || '';
}
Shape.prototype.draw = function () {
  return `Drawing a ${this.shape} shape`;
};

function Rectangle() {
  Shape.call(this, 'Rectangle');
}
function Circle() {
  Shape.call(this, 'Circle');
}
function Square() {
  Shape.call('Square');
}
Rectangle.prototype = new Shape();
Circle.prototype = new Shape();
Square.prototype = new Shape();

function RedOutlineShapeDecorator(shape) {
  this.shape = shape;
}
RedOutlineShapeDecorator.prototype.draw = function () {
  return `${this.shape.draw()}. Adding a red outline`;
};

function BlueFillShapeDecorator(shape) {
  this.shape = shape;
}
BlueFillShapeDecorator.prototype.draw = function () {
  return `${this.shape.draw()}. Painting with a blue fill`;
};

const myRectangle = new Rectangle();
console.log(myRectangle.draw());
const myRedOutlineRectangle = new RedOutlineShapeDecorator(myRectangle);
console.log(myRedOutlineRectangle.draw());
const myBlueFillRectangle = new BlueFillShapeDecorator(myRectangle);
console.log(myBlueFillRectangle.draw());
const myBlueFillCircle = new BlueFillShapeDecorator(new Circle());
console.log(myBlueFillCircle.draw());
const myRedOutlineBlueFillCircle = new RedOutlineShapeDecorator(myBlueFillCircle);
console.log(myRedOutlineBlueFillCircle.draw());
```