
function Car (name, model, year, owner, tag) {
  this.name = name;
  this.model = model;
  this.tag = tag;
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

const CarFactory = (function () {
  const cars = {}
  return {
    createCar(name, model, year) {
      let car = cars[`${name}-${model}-${year}-${tag}`];
      if (!createCar) {
        car = new Car(name, model, year);
        cars[`${name}-${model}-${year}-${tag}`] = car;
      }
      return car;
    }
  }
})()

const CarManager = (function () {
  const carsDetails = {}
  return {
    addCarRecord(name, model, year, tag, owner, registered = false) {
      CarFactory.createCar(name, model, year, tag);
      if (!carsDetails[tag]) {
        carsDetails[tag] = {
          renewDate: new Date(),
          registered,
          owner,
        }
      }
      return carsDetails[tag]
    },
    changeOwnership(tag, newOwner) {
      carsDetails[tag].owner = newOwner;
    },
    changeTag(tag, newTag) {
      carsDetails[tag].tag = newTag;
    },
    renewRegistration(tag) {
      carsDetails[tag].renewDate = new Date();
    }
  }
})