Inheriting the properrties of one object by another

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.shout = function () {
  console.log('I am shouting');
}

function SuperHero(firstName, lastName, superPower) {
  Person.call(this, firstName, lastName);
  this.superPower = superPower;
}

function $_() {}
$_.prototype = Person.prototype;
SuperHero.prototype =  new $_();
SuperHero.prototype.constructor = SuperHero
// OR
SuperHero.prototype = Object.create(Person.prototype);
```