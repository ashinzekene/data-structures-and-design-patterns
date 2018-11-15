# Template Pattern

This pattern is a behavioural design pattern that defines a template of functions, which can then be overriden by child methods.
This is a very simple and popular pattern used in many patterns to reduce/prevent code reuse.

The child classes usually override the methods as needed but preserve the invocation method of the parent;

## Participants

- Abstract Class - This is the class that is responsible for definning the template method, the class methods are defined as abstract (in type languages) so they can be overriden by children classes
- Concrete Class - This implements or inherits from the abstract class, carrying all methods from the parent class (Abstract class). It then is able to override these methods as per it's requirements

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.sound = function () {
  return 'I am sounding';
};
Animal.prototype.move = function () {
  return 'I am moving';
};
Animal.prototype.unrinate = function () {
  return 'I am urinating';
};

function Dog(name) {
  Animal.call(this, name);
}
Dog.prototype = Animal.prototype;
Dog.prototype.constrctor = Dog;
Dog.prototype.sound = function () {
  return 'I am barking';
};

function Horse(name) {
  Animal.call(this, name);
}
Horse.prototype = Animal.prototype;
Horse.prototype.constrctor = Horse;
Horse.prototype.sound = function () {
  return 'I am neighing';
};
Horse.prototype.move = function () {
  return 'I am galloping';
};

const horse = new Horse('white horse');
horse.sound();
horse.urinate();
const dog = new Dog('black dog');
dog.sound();
dog.move();
```