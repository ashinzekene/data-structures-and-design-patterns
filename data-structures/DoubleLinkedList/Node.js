module.exports = class Node {
  /**
   * A node containing an element and two node
   * @param {any} element Element to add to the node
   */
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }

  get [Symbol.toStringTag]() {
    return 'Node';
  }
};
