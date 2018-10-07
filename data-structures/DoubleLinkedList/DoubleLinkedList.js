const Node = require('./Node');

module.exports = class DoubleLinkedList {
  /**
   * A type of linked list where each node has two nodes
   * @extends LinkedList
   */
  /* eslint-disable no-useless-constructor */
  constructor(name = 'DLList') {
    this.name = name;
  }

  /**
   * Creates a new node containing the item sent and adds it to the bottom of the list
   * @param {any} item item to insert into new Node
   */
  append(item) {
    const newNode = new Node(item);
    let currNode = this.head;
    if (!this.head) {
      this.head = newNode;
      return;
    }

    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = newNode;
    newNode.previous = currNode;
  }

  /**
   * Finds and return the node which contains the item
   * @param {any} item The item to find
   * @returns {Node} the ezpected node
   */
  find(item) {
    let currentNode = this.head;
    while (currentNode && currentNode.element !== item) {
      currentNode = currentNode.next;
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
   * @returns {False} if element is not present in list
   */
  remove(item) {
    const currentNode = this.find(item);
    if (!currentNode) {
      return false;
    }
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

  /**
   * Gets the length of items in the Linked list
   * @returns {Number} The length of items in the linked list
   */
  get size() {
    let size = 0;
    let currNode = this.head;
    while (currNode) {
      size++;
      currNode = currNode.next;
    }
    return size;
  }

  clear() {
    this.head = null;
  }

  isEmpty() {
    return !this.head;
  }
};
