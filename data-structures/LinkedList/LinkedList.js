const Node = require('./Node');

module.exports = class LinkedList {
  // TODO: function removeAt(index)
  // TODO: function elementAt(index)
  // TODO: function addAt(index)
  // TODO: function indexOf(index)

  /**
   * A linked list is a collection of objects called nodes. Each node is linked
   * to a successor node in the list using an object referenc
   * @param {String} name Name of the list
   */
  constructor(name = 'LList') {
    this.head = null;
    this.name = name;
    this.length = 0;
  }

  /**
   * Finds node which contains the item sent
   * @param {any} item The content of the node to find
   * @returns {Node | null} the node found
   */
  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      if (!currNode.next) {
        return null;
      }
      currNode = currNode.next;
    }
    return currNode;
  }

  /**
   * Appends a new node to the last node on the linked list
   * @param {any} element The content of the new node to append
   */
  append(element) {
    const newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
      this.length++;
      return;
    }
    let prevNode = this.head;
    while (prevNode.next) {
      prevNode = prevNode.next;
    }
    prevNode.next = newNode;
    this.length++;
  }

  /**
   * Inserts a new node after another node
   * @param {any} element The content of the new Node to append
   * @param {any} item The contents of the node to insert new node after
   * @returns {Boolean} true if successfull, false if otherwise
   */
  insert(element, item) {
    const newNode = new Node(element);
    const prevNode = this.find(item);
    if (!prevNode) {
      console.log('Cannot insert new node, cannot find node to insert after');
      return false;
    }
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  /**
   * Removes a node based on its contents
   * @param {any} item item to used to search for node to remove
   * @returns {Boolean} true if successfull, false if otherwise
   */
  remove(item) {
    let currNode = this.head;
    if (this.head === null) {
      return false;
    }
    while (currNode.next.element !== item) {
      if (currNode.next === null) {
        return false;
      }
      currNode = currNode.next;
    }
    // If head is removed
    if (currNode.next === this.head) {
      this.head = currNode.next.next;
    }
    currNode.next = currNode.next.next;
    this.length--;
    return true;
  }

  /**
   * Returns the number of links present on a linked list
   */
  get size() {
    return this.length;
  }

  /**
   * Clear the linked list leaving the head
   */
  clear() {
    this.length = 0;
    this.head = null;
  }

  /**
   * Checks if the linked list is empty
   * @returns {Boolean} true if list is empty
   */
  isEmpty() {
    // OR return this.length !== 0;
    return this.head === null;
  }

  /**
   * Return all nodes in the linked list
   * @returns {[Node]} An array containing
   */
  toString() {
    let currNode = this.head;
    const result = [];
    while (currNode !== null) {
      result.push(currNode.element);
      currNode = currNode.next;
    }
    return result.join(',');
  }
};
