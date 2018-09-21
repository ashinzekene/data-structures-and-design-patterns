module.exports = class Queue {
  /**
   * A queue is a type of list where data are inserted at the end and are removed from the
   * front. Queues are used to store data in the order in which they occur
   * @param {String} name The name of the queue
   */
  constructor(name = 'queue') {
    this.dataStore = [];
    this.name = name;
  }

  /**
   * Add elements to the queue
   * @param {any} x item to add to the queue
   * @returns {Number} returns the lenth of th queue
   */
  enqueue(x) {
    return this.dataStore.push(x);
  }

  /**
   * Remove elements to the queue
   * @returns {any} the element removed from the queue
   */
  dequeue(x) {
    return this.dataStore.shift();
  }

  /**
   * Get the first element
   */
  get front() {
    return this.dataStore[this.dataStore.length - 1];
  }

  /**
   * Get the last element
   */
  get back() {
    return this.dataStore[0];
  }

  /**
   * Get the lenth of items in the queue
   * @returns {Number} the length of items in the array
   */
  get length() {
    return this.dataStore.length;
  }

  /**
   * Checks if there are elements in the queue
   * @returns {Boolean} true if queue is empty or otherwise
   */
  isEmpty() {
    return !this.dataStore.length;
  }

  /**
   * Removes all items in the queue
   */
  clear() {
    this.dataStore = [];
  }

  /**
   * Returns a string representation of the elements in the queue
   * @param {String} delimiter The string to serve as delimiter when joining elements in the queue
   * @returns {String} the queue
   */
  toString(delimiter = ',') {
    return this.dataStore.join(delimiter);
  }

  // Juicy Stuff

  get [Symbol.toStringTag]() { return 'Stack' };

  [Symbol.iterator]() {
    let i = 0
    return {
      next: () => ({ value: this.dataStore[i++], done: i > this.dataStore.length - 1 }),
    }
  }

}