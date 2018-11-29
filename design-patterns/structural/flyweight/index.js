function Car(name, model, year, tag) {
  this.name = name;
  this.model = model;
  this.tag = tag;
  this.year = year;
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
};
Car.prototype.constructor = Car;

const CarFactory = (function () {
  const cars = {};
  return {
    createCar(name, model, year, tag) {
      let car = cars[`${name}-${model}-${year}-${tag}`];
      if (!car) {
        car = new Car(name, model, year, tag);
        cars[`${name}-${model}-${year}-${tag}`] = car;
      }
      return car;
    }
  };
})();

const CarManager = (function () {
  const carsDetails = {};
  return {
    addCarRecord({name, model, year, tag, owner, registered = false}) {
      const car = CarFactory.createCar(name, model, year, tag);
      if (!carsDetails[tag]) {
        carsDetails[tag] = {
          renewDate: new Date(),
          registered,
          owner
        };
      }
      return {...car, ...carsDetails[tag]};
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
  };
})();

const myMercedez = CarManager.addCarRecord({name: 'mercedes', model: 'GL-550', year: 2018, tag: 'ekene-1', owner: 'Ekene', registered: true});
console.log(myMercedez.renewDate);
console.log(myMercedez.name);
console.log(myMercedez.tag);

