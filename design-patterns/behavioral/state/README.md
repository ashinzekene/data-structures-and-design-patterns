# State Pattern

This is another behavioural pattern in which an object changes behaviour based on its internal state. The purpose of this pattern is to vary the behavior of a class without having to change the implementation of the class. It also prevent unuseful ifs from classes

```js
function Kick(type) {
  this.type = type;
}
Kick.prototype.kick = function () {
  return `Giving out a ${this.type} kick`;
};
function SoftKick() {
  Kick.call(this, 'Soft');
}
SoftKick.prototype = new Kick();
function HardKick() {
  Kick.call(this, 'Soft');
}
HardKick.prototype = new Kick();

function Kicker() {
  this.state = new SoftKick();
}
Kicker.prototype.act = function () {
  this.state.kick();
};
Kicker.prototype.setState = function (state) {
  this.state = state;
};
Kicker.prototype.getState = function () {
  return this.state;
};

```