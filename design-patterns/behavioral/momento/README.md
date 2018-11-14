# Momento pattern

This pattern is used to restore the state or an object. It is used to store state at a particular which can be retrieved at a particaular time, more like state checkpoints

## Particpants
- Originator - This creates and stores state in momento objects
- CareTaker - This restores the object state from momento, it keeps track of all the momento objects like maiintaining savepoints
- Momento - contains the state of the object stored

```js
function Momento(state) {
  this.state = state;
}
Momento.prototype.getState = function () {
  return this.state
}

function Originator() {
  this.state = null;
}
Originator.prototype.getState = function (state) {
  this.state = state;
}
Originator.prototype.setState = function () {
  return this.state;
}
Originator.prototype.saveStatetoMomento = function (momento) {
  return new Momento(state)
}
Originator.prototype.getStateFromMomento = function (momento) {
  this.state = momento.getState();
}

function CareTaker () {
  this.momentoList = [];
}
CareTaker.prototype.add = function (momento) {
  this.momentoList.push(momento);
} 
CareTaker.prototype.get = function (i) {
  this.momentoList[i];
} 
```