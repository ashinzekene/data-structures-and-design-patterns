# Builder

This is a creational data structure that seperates a complex object's construction from its representation so that the same construction process can yield differnet representations.  
The `builder pattern` aims at simplifying client while creating/configuring complex objects

Objects partiipating in this pattern include:

- Director - respondible for construting products using the builder's multi-step mechanism
- Builder - declares the steps used for constructing the product (Not present in JavaScript, it's an interface)
- Concrete Builder - This is the object that is responsible for undertaking the multistep process and building up the product. It
  - Implements the Builder interface
  - Constructs the products
  - Provides a way to retrieve the finished product
- Products - these are the complex objects being assembled/constructed.

```js
// Director
function CarShop(builder) {
  this.builder = builder;
}
CarShop.prototype.construct = function() {
  this.builder.stepOne();
  this.builder.stepTwo();
  this.builder.stepThree();
};

// Concrete Builder
function CarBuilder() {
  this.car = new Car();
}
CarBuilder.prototype = {
  stepOne() {
    this.car.createBody();
  },
  stepTwo() {
    this.car.createEngine();
  },
  stepThree() {
    this.car.createTires();
  },
  getNewCar() {
    return this.car;
  }
};

// Product
function Car() {
  this.body = false;
  this.engine = NaN;
  this.tires = NaN;
}
Car.prototype = {
  createBody() {
    this.body = 'New Chassis';
  },
  createEngine() {
    this.engine = ['v6', '7-litre'];
  },
  createTires() {
    this.tires = 4;
  }
};
Car.prototype.constructor = Car

const carBuilder = new CarBuilder(myCar);
const carShop = new CarShop(carBuilder);
console.log(myCar);
carShop.construct(carBuilder);
console.log(carBuilder.getNewCar());
```
