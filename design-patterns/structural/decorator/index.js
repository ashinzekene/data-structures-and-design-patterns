function Car() {}
Car.prototype.getPrice = function () {
  return 4000;
};
Car.prototype.getDetails = function () {
  return 'A car';
};

function SportCarDecorator(car) {
  Car.call(this, 'Sport');
  this.car = car;
}
SportCarDecorator.prototype.getPrice = function () {
  return this.car.getPrice() + 2000;
};
SportCarDecorator.prototype.getDetails = function () {
  return `${this.car.getDetails()} with a sporty design`;
};

function LuxuryCarDecorator(car) {
  Car.call(this, 'Luxury');
  this.car = car;
}
LuxuryCarDecorator.prototype.getPrice = function () {
  return this.car.getPrice() + 3000;
};
LuxuryCarDecorator.prototype.getDetails = function () {
  return `${this.car.getDetails()} built for comfort`;
};

function BudgetCarDecorator(car) {
  Car.call(this, 'Budget');
  this.car = car;
}
BudgetCarDecorator.prototype.getPrice = function () {
  return this.car.getPrice() - 500;
};
BudgetCarDecorator.prototype.getDetails = function () {
  return `${this.car.getDetails()} that gives value for money`;
};

function TintedGlassDecorator(car) {
  Car.call(this, 'Budget');
  this.car = car;
}
TintedGlassDecorator.prototype.getPrice = function () {
  return this.car.getPrice() + 500;
};
TintedGlassDecorator.prototype.getDetails = function () {
  return `${this.car.getDetails()} with tinted glass`;
};

function CustomRimDecorator(car) {
  Car.call(this, 'Budget');
  this.car = car;
}
CustomRimDecorator.prototype.getPrice = function () {
  return this.car.getPrice() + 500;
};
CustomRimDecorator.prototype.getDetails = function () {
  return `${this.car.getDetails()} with custom rims`;
};

const mySimpleCar = new Car();
console.log(mySimpleCar.getDetails());
console.log(mySimpleCar.getPrice());
const mySportCar = new SportCarDecorator(new Car());
console.log(mySportCar.getDetails());
console.log(mySportCar.getPrice());
const myTintedSportCar = new TintedGlassDecorator(mySportCar);
console.log(myTintedSportCar.getDetails());
console.log(myTintedSportCar.getPrice());
const myCustomRimSimpleCar = new CustomRimDecorator(new Car());
console.log(myCustomRimSimpleCar.getDetails());
console.log(myCustomRimSimpleCar.getPrice());
const luxuryCar = new LuxuryCarDecorator(new Car());
console.log(luxuryCar.getDetails());
console.log(luxuryCar.getPrice());
const customRimLuxuryCar = new CustomRimDecorator(luxuryCar);
console.log(customRimLuxuryCar.getDetails());
console.log(customRimLuxuryCar.getPrice());
const customRimTintedLuxuryCar = new TintedGlassDecorator(customRimLuxuryCar);
console.log(customRimTintedLuxuryCar.getDetails());
console.log(customRimTintedLuxuryCar.getPrice());
