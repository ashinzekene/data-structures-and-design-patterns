const Node = require('./Node');

module.exports = class LinkedList {
  constructor(name = 'LList') {
    this.head = new Node('head')
    this.name = name;
  }

  /**
   * Finds node which contains the item sent
   * @param {any} item The content of the node to find
   * @returns {Node || null} the node found
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
    let prevNode = this.head;
    while (prevNode.next) {
      prevNode = prevNode.next;
    }
    prevNode.next = newNode;
  }

  /**
   * Inserts a new node after another node
   * @param {any} element The content of the new Node to append
   * @param {any} item The contents of the node to insert new node after
   */
  insert(element, item) {
    const newNode = new Node(element);
    const prevNode = this.find(item);
    if (!prevNode) {
      console.log('Cannot insert new node, cannot find node to insert after');
      return false
    }
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    return true;
  }

  /**
   * Removes a node based on its contents
   * @param {any} item item to used to search for node to remove
   */
  remove(item) {
    let currNode = this.head;
    while (currNode.next.element !== item) {
      if (currNode.next === null) {
        return false
      }
      currNode = currNode.next;
    }
    currNode.next = currNode.next.next;
    return true;
  }

  /**
   * Returns the number of links present on a linked list
   */
  get size() {
    let n = 0;
    let currNode =  this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
      n++;
    }
    return n;
  }

  /**
   * Clear the linked list leaving the head
   */
  clear() {
    this.head.next = null;
  }

  /**
   * Return all nodes in the linked list
   * @returns {[Node]} An array containing
   */
  toString() {
    let currNode = this.head.next;
    let result = [];
    while (currNode !== null) {
      result.push(currNode.element);
      currNode = currNode.next;
    }
    return result.join(',');
  }

}