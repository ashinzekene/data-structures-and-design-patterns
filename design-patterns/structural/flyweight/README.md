# Flyweight attern

This is a pattern used in sotware design for optimization of code. It is used in code that is highly repititive where there are many similar object initiated. The kinds of enviroment are usually memory intensive.

This pattern reduces the number of object created. This is done by dividing object states into two categories: `intirinsic data` and `extrinsic data`.  Intrinsic data are information required for the initialization of the object. The object cannot function without this information. Extrinsic data are information that can be abstracted from from the object and stored externally.  


**Normal Style**
```js
function Car (name, model, year, owner, tag) {
  this.name = name;
  this.model = model;
  this.year =  year;
  this.owner = owner;
  this.renewDate = null;
  this.registered = false;
}

Car.prototype = {
  getMake() {
    return this.make;
  },
  getModel() {
    return this.model;
  },
  getYake() {
    return this.year;
  },
  register() {
    this.registerd = true;
    this.renewDate = new Date();
  },
  renewRegistration() {
    this.renewDate = new Date();
  },
  getOwner() {
    return this.owner;
  },
  changeOwnership(newOwner) {
    this.owner = newOwner;
  }
}
Car.prototype.constructor = Car;
```

**Flyweight Style**
```js
function Car(name, model, year) {
  this.name = name;
  this.model = model;
  this.year = year;
}

const CarFactory = !function() {
  const cars = {};
  return {
    createCar() {}
  }
}()

const carManager = !function() {
  const carDetails = {}
  return {
    registerCar(tag) {},
    changeOwner(tag, newOwner) {},
    renewRegistration(tag) {},
  }
}()
```
