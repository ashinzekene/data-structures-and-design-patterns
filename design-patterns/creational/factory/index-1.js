const VehicleFactory = (() => {
  function Car(name = 'Car') {
    this.name = name;
    this.type = 'car';
    this.wheels = 4;
    this.height = 'low';
    this.engine = 'C';
    this.lights = 4;
    this.features = 'AC';
  }
  Car.prototype.horn = function () {
    return 'puuumm';
  };
  function Truck(name = 'Truck') {
    this.name = name;
    this.type = 'truck';
    this.wheels = 8;
    this.height = 'A';
    this.engine = 'big';
    this.lights = 6;
    this.features = 'nothing';
  }
  Truck.prototype.horn = function () {
    return 'pooorrh';
  };
  function Bike(name = 'Bike') {
    this.name = name;
    this.type = 'bike';
    this.wheels = 2;
    this.height = 'low';
    this.engine = 'D';
    this.lights = 2;
    this.features = 'piiiii';
  }
  Bike.prototype.horn = function () {
    return 'piiiim';
  };
  function Tricycle(name = 'Tricycle') {
    this.name = name;
    this.type = 'tricycle';
    this.wheels = 3;
    this.height = 'low';
    this.engine = 'D';
    this.lights = 4;
    this.features = 'nothing';
  }
  Tricycle.prototype.horn = function () {
    return 'puuumm';
  };
  return {
    create(type, ...args) {
      const classes = {
        car: Car,
        truck: Truck,
        bike: Bike,
        tricycle: Tricycle,
        default: Car
      };
      const VehicleType = classes[type] || classes.default;
      return new VehicleType(...args);
    }
  };
})();

const car = VehicleFactory.create('car', 'Mercedes SLS AMG');
const bike = VehicleFactory.create('bike');
const shit = VehicleFactory.create('shit');
const truck = VehicleFactory.create('truck');

console.log(car.name);
console.log(bike.lights);
console.log(shit.type);
console.log(truck.horn());
