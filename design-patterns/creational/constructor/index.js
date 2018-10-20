/**
 * Creates a Car Instance
 * @param {Strig} name The ame of the car
 * @param {Number} year The manufactured year
 * @param {Number} milage The distance travelled by the car (KM)
 */
function Car(name, year, milage) {
  this.name = name;
  this.year = year;
  this.milage = milage;

  // A new instance of this is created when this is `new Car()` is called
  this.horn = function () {
    console.log('Car is horning');
  };
}

// Not create on new `new Car()`.
Car.prototype.drive = function () {
  console.log('Car is driving');
};

Car.prototype.details = function () {
  console.log(`This is a ${this.name} car, manufactured in ${this.year}`);
};

const myCar = new Car('Toyota', 2017, 1245.666);

myCar.drive(); // Car is driving;
myCar.horn(); // Car is horning
myCar.details();
