const VehicleFactory = (() => {
  const types = [];
  return {
    createVehicle(type, feeatures) {
      if (types[type]) {
        return new types[type](feeatures);
      }
    },
    registerVehicle(type, Vehicle) {
      const testVehicle = new Vehicle();
      if (testVehicle.wheels) {
        types[type] = Vehicle;
      }
    }
  };
})();

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

VehicleFactory.createVehicle('car', Car);
