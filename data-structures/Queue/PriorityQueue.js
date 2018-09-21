const Queue = require('./Queue');

module.exports = class PriorityQueue extends Queue {
  /**
   * A priority-queue is a type of list where data are inserted at the end and are removed based
   * on their priorities.
   * @extends Queue
   * @param {String} name The name of the queue
   */
  constructor(name) {
    super(name);
  }

  /**
   * Adds items to the queue
   * @param {{ priority: Number, ...any}} x Items to add to the queue. **Must** have a priority key
   */
  enqueue(x) {
    if (typeof x.priority !== 'number') {
      throw new Error('Items added to a priority queue should have a priority property');
    }
    super.enqueue(x)
  }

  /**
   * Removes items from the queue basaed on their prorities, items with higer priorities
   * (lower priority values) removed first
   * @returns {Array} an array of one element containing the removed item
   */
  dequeue() {
    let lowestPriority = this.dataStore[0].priority;
    let index = 0;
    for (let x in this.dataStore) {
      if (this.dataStore[x].priority < lowestPriority) {
        lowestPriority = this.dataStore[x].priority;
        index = x;
      }
    }
    return this.dataStore.splice(index, 1);
  }
}