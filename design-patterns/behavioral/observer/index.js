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

  notify(result) {
    console.log('calling with', result);
    this.observers.forEach(observer => observer.update(result));
  }

  removeObserver(i) {
    this.observers.splice(i, 1);
  }

  getObserver(i) {
    return this.observers[i]
  }
}