function Momento(state) {
  this.state = state;
}
Momento.prototype.getState = function () {
  return this.state;
};

function Originator() {
  this.state = null;
}
Originator.prototype.setState = function (state) {
  this.state = state;
};
Originator.prototype.getState = function () {
  return this.state;
};
Originator.prototype.saveStatetoMomento = function () {
  return new Momento(this.state);
};
Originator.prototype.getStateFromMomento = function (momento) {
  this.state = momento.getState();
};

function CareTaker() {
  this.momentoList = [];
}
CareTaker.prototype.add = function (momento) {
  this.momentoList.push(momento);
};
CareTaker.prototype.get = function (i) {
  return this.momentoList[i];
};

const careTaker = new CareTaker();
const originator = new Originator();
originator.setState(1);
originator.setState(2);
careTaker.add(originator.saveStatetoMomento());
originator.setState(4);
careTaker.add(originator.saveStatetoMomento());

originator.getStateFromMomento(careTaker.get(0));
console.log('First state saved', originator.getState());
originator.getStateFromMomento(careTaker.get(1));
console.log('Second state saved', originator.getState());
originator.setState(6);
console.log('Current state', originator.getState());
