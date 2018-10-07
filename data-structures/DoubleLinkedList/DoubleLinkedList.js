const LinkedList = require('../LinkedList/LinkedList');
const Node = require('./Node');

module.exports = class DoubleLinkedList extends LinkedList {
  /**
   * A type of linked list where each node has two nodes
   * @extends LinkedList
   */
  /* eslint-disable no-useless-constructor */
  constructor(name) {
    super(name);
  }

  /**
   * Creates a new node containing the item sent and adds it to the bottom of the list
   * @param {any} item item to insert into new Node
   */
  append(item) {
    const newNode = new Node(item);
    const currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currentNode.next = newNode;
    newNode.previous = currentNode;
  }

  /**
   * Finds and return the node which contains the item
   * @param {any} item The item to find
   * @returns {Node} the ezpected node
   */
  find(item) {
    const currentNode = this.head;
    while (currentNode.element !== item) {
      currentNode.next = currentNode
    }
    return currentNode;
  }

  /**
   * Inserts a new node after the given element
   * @param {any} newElement item to wrap in Node and insert into list
   * @param {any} item item in Node to insert new node after
   */
  insert(newElement, item) {
    const newNode = new Node(newElement);
    const node = this.find(item);
    newNode.next = node.next;
    node.next = newNode;
    newNode.previous = node;
  }

  /**
   * Removes a node from the list containing the item passed in
   * @param {any} item removes node containing this item
   */
  remove(item) {
    const currentNode = this.find(item);
    if (currentNode.previous !== null) {
      // Else is Head node
      currentNode.previous.next = currentNode.next;
      currentNode.previous = null;
    }
    if (currentNode.next !== null) {
      // Else is Last node
      currentNode.next.previous = currentNode.previous;
      currentNode.next = null;
    }
  }

  get isEmpty() {
    return !this.head.next;
  }

}