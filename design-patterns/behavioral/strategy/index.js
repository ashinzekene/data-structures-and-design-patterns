function Character(name) {
  this.name = name;
}
Character.prototype.setKickStrategy = function (strategy) {
  this.kickStrategy = strategy;
};
Character.prototype.setJumpStrategy = function (strategy) {
  this.jumpStrategy = strategy;
};
Character.prototype.kick = function () {
  return `${this.name} is ${this.kickStrategy.execute()}`;
};
Character.prototype.jump = function () {
  return `${this.name} is ${this.jumpStrategy.execute()}`;
};

function SoftKick() {}
SoftKick.prototype.execute = function () {
  return 'Executing a soft kick';
};
function HardKick() {}
HardKick.prototype.execute = function () {
  return 'Executing a hard kick';
};

function ShortJump() {}
ShortJump.prototype.execute = function () {
  return 'Executing a short Jump';
};
function LongJump() {}
LongJump.prototype.execute = function () {
  return 'Executing a long Jump';
};

function Askyu() {
  Character.call(this, 'Askyu');
  this.kickStrategy = new HardKick();
  this.jumpStrategy = new LongJump();
}
Askyu.prototype = new Character();
Askyu.prototype.constructor = Askyu;

function Tana() {
  Character.call(this, 'Tana');
  this.kickStrategy = new SoftKick();
  this.jumpStrategy = new ShortJump();
}
Tana.prototype = new Character();
Tana.prototype.constructor = Tana;

const tana = new Tana();
const askyu = new Askyu();
tana.kick();
tana.setKickStrategy(new HardKick());
tana.kick();
askyu.jump();
askyu.setJumpStrategy(new ShortJump());
askyu.jump();
