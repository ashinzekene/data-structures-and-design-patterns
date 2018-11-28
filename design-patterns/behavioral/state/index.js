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
  Kick.call(this, 'Hard');
}
HardKick.prototype = new Kick();

function Kicker() {
  this.state = new SoftKick();
}
Kicker.prototype.act = function () {
  return this.state.kick();
};
Kicker.prototype.setState = function (state) {
  this.state = state;
};
Kicker.prototype.getState = function () {
  return this.state;
};

const hardKick = new HardKick();

const kicker = new Kicker();
console.log(kicker.act());
console.log(kicker.getState());
kicker.setState(hardKick);
console.log(kicker.act());
console.log(kicker.getState());
