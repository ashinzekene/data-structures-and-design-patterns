const Vehicle = {
  wheels: 4,
  engines: 2,
  fuelCapacity: '4000 gallons',
  horn() {
    console.log('porrrrrhhhhhh...');
  },
  drive() {
    console.log('vuuuuuummmmmm');
  }
};

const car = Object.create(Vehicle, {
  horn: {
    value: () => {
      console.log('piiiiiiiiiiiim......');
    },
    enumerable: true
  }
});

car.horn();

Object.create = (function () {
  if (typeof Object.create === 'function') {
    return Object.create;
  }
  return function (obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
})();
