class Observer {
  constructor() {
    this.value = null
  }
  update(val) {
    this.value = val
  }
}

class Subject {
  constructor() {
    /** @type{Observer[]} */
    this.observers = [];
  }

  addObserver(x = new Observer()) {
    this.observers.push(x)
  }

  removeObserver(i) {
    this.observers.splice(i, 1);
  }

  getObserver(i) {
    return this.observers[i]
  }
}