module.exports = class Node {
  /**
   * A node containing an element and a node
   * @param {any} element Element to add to the node
   */
  constructor(element) {
    this.element = element;
    this.next = null;
  }

  get [Symbol.toStringTag]() {
    return 'Node';
  }
};
