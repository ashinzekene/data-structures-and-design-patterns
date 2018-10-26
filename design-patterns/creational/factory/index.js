const VehicleFactory = (() => {
  const Car = {
    type: 'car',
    wheels: 4,
    height: 'low',
    engine: 'C',
    lights: 4,
    horn() {
      return 'puuumm';
    },
    feaatures: 'AC'
  };
  const Truck = {
    type: 'truck',
    wheels: 8,
    height: 'A',
    engine: 'big',
    horn() {
      return 'porrrhhh';
    },
    lights: 6,
    feaatures: 'nothing'
  };
  const Bike = {
    type: 'bike',
    wheels: 2,
    height: 'low',
    horn() {
      return 'piiiiii';
    },
    engine: 'D',
    lights: 2,
    feaatures: 'nothing'
  };
  const Tricycle = {
    type: 'tricycle',
    wheels: 3,
    height: 'low',
    horn() {
      return 'piiiiii';
    },
    engine: 'D',
    lights: 4,
    feaatures: 'nothing'
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
      const vehicleType = classes[type] || classes.default;
      return Object.create(vehicleType, ...args);
    }
  };
})();

const car = VehicleFactory.create('car', {name: {value: 'Mercedes SLS AMG'}});
const bike = VehicleFactory.create('bike');
const shit = VehicleFactory.create('shit');
const truck = VehicleFactory.create('truck');

console.log(car.name);
console.log(bike.lights);
console.log(shit.type);
console.log(shit.type);
console.log(truck.horn());
