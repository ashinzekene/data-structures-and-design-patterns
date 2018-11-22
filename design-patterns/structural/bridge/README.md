# Bridge

This is a strural design pattern, where a large class is broken down into smaller classes such that, these smaller clases.
It is majorly concerned about seperating `abstraction` from `implementation`. It allows classes (objects) to be reuseable, allowing them to have many implementations.

It favours implementation over subclasing.

### Elements of abstraction
- Abstraction – core of the bridge design pattern and defines the crux. Contains a reference to the implementer.
- Refined Abstraction – Extends the abstraction takes the finer detail one level below. Hides the finer elements from implemetors.
- Implementer – It defines the interface for implementation classes. This interface does not need to correspond directly to abstraction interface and can be very different. (Not present in JavaScript).
- Concrete Implementation – Implements the above implementer by providing concrete implementation.

**Without bridge** 
```js
function Shape() {
  this.lineColor = 'black';
  this.fill = 'black';
}

Shape.prototype = {
  draw() {
    return `Drawing with a ${this.fill} colored fill and a ${this.lineColor} line color`
  }
  clear() {
    // Remove circle
  }
}
Shape.prototype.constructor = Shape;

function RedFillWhiteLineShape() {
  this.lineColor = 'white';
  this.fill = 'red';
}
RedFillWhiteLineShape.prototype = {
  draw() {
    return `Drawing with a ${this.fill} colored fill and a ${this.lineColor} line color`
  }
  clear() {
    // Remove circle
  }
}
RedFillWhiteLineShape.prototype.constructor = RedFillWhiteLineShape;

function BlueFillYellowLineShape() {
  this.lineColor = 'yellow';
  this.fill = 'blue';
}
BlueFillYellowLineShape.prototype = {
  draw() {
    return `Drawing with a ${this.fill} colored fill and a ${this.lineColor} line color`
  }
  clear() {
    // Remove circle
  }
}
BlueFillYellowLineShape.prototype.constructor = BlueFillYellowLineShape;

const blueYellowShape = new BlueFillYellowLineShape();
const redWhiteShape = new RedFillWhiteLineShape();
blueYellowShape.draw();
redWhiteShape.draw();
```
[Bridge Pattern](./index.js)