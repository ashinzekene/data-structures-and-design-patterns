module.exports = class Queue {
  constructor() {
    this.dataStore = [];
  }

  /**
   * Add elements to the queue
   * @param  {any} x item to add to the queue
   */
  enqueue(x) {
    return this.dataStore.push(x);
  }

  /**
   * Remove elements to the queue
   * @returns {any} the element removed from the queue
   */
  dequeue(x) {
    return this.dataStore.shift()
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
   * @param {String} delimiter The string to serve as delimiter when joining elemnts in the queue
   */
  toString(delimiter = '') {
    return this.dataStore.join(delimiter);
  }

}