# Constructor Pattern

Creating a 'normal' Object can be done by any of these methods:

```js
var myObj = {};
var myObj = new Object();
var myObj = Object.create(Object.prototype);
```

```js
function MyCars(name = 'my object') {
  this.name = name;
  this.cars = [];
}

MyCars.prototype.add = function(car) {
  this.cars.push(car)
}

MyCars.prototype.remove = function(car) {
  this.cars = this.cars.filter(c => c !== car)
}

MyCars.prototype.allCars = function() {
  return this.cars
}

const myCars = new MyCars('ekene\'s cars')
myCars.add('Porsche Panamera')
myCars.add('Mercedez GL550')
myCars.add('BMW M6')
myCars.add('Toyota LandCruiser')
myCars.allCars()
```