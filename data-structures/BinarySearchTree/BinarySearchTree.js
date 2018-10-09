const BSTNode = require('./BSTNode');

module.exports = class BinarySearchTree {
  construtor(name = 'bst') {
    this.name = name;
    this.head = null;
  }

  /**
   * Change item to number if possible else return false
   * @param {any} elem item to change to number
   * @returns {Number|False} returns number or false
   */
  static toNumber(elem) {
    if (typeof elem === 'number') {
      return elem;
    }
    elem = Number(elem);
    return Number.isNaN(elem) ? false : elem;
  }

  /**
   * Checks if an element is in the tree
   * @param {Number} element Number to insert into the tree
   * @return {Boolean} True if the element is present
   */
  insert(element) {
    element = BinarySearchTree.toNumber(element);
    if (!element) {
      console.log('Can only insert a Number to a BST');
      return false;
    }
    const newNode = new BSTNode(element);

    if (!this.head) {
      this.head = newNode;
      return true;
    }
    /**
     *
     * @param {BSTNode} node element to search
     */
    const searchParent = function (node) {
      if (element > node.element) {
        if (node.right) {
          searchParent(node.right);
        } else {
          node.right = newNode;
        }
      } else if (element < node.element) {
        if (node.left) {
          searchParent(node.left);
        } else {
          node.left = newNode;
        }
      }
    };
    searchParent(this.head);
  }

  /**
   * Finds an element in the tree
   * @param {Number} x The element to find in the tree
   * @returns {BSTNode|Boolean} returns the found node containing the element or false
   */
  find(x) {
    const element = BinarySearchTree.toNumber(x);
    if (!element) {
      console.log('Can only insert a Number to a BST');
      return false;
    }
    let node = this.head;
    while (node) {
      if (node.element === element) {
        return node;
      }
      if (node.element > element) {
        node = node.left;
      } else if (node.element < element) {
        node = node.right;
      }
    }
    return false;
  }

  /**
   * Checks if an element is present in a tree
   * @param {Number} x The number to check if present in the tree
   * @returns {Boolean} True if element is in tree
   */
  isPresent(x) {
    return Boolean(this.find(x));
  }

  /**
   * Removing a node from a tree
   * @param {Number} data The number to remove
   */
  remove(data) {
    /**
     * Replaces nodes after removing a node from it
     * @param {BSTNode} node the current node
     * @param {Number} data the number to search for
     * @return {Node} resulting node after removal operation
     */
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (node.element === data) {
        if (!node.right && !node.left) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        if (node.left && node.right) {
          let tempNode = node.right;
          while (tempNode.left) {
            tempNode = tempNode.left;
          }
          node.element = tempNode.element;
          tempNode.right = node.right;
        }
      }
      if (node.element > data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      if (node.element < data) {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.head = removeNode(this.head, data);
  }

  /**
   * Find the node with the largest value
   * @returns {BSTNode} the element with the largest value
   */
  findMax() {
    let node = this.head;
    if (!node) {
      return null;
    }
    while (node.right) {
      node = node.right;
    }
    return node;
  }

  /**
   * Find the node with the smallest value
   * @returns {BSTNode} the element with the smallest value
   */
  findMin() {
    let node = this.head;
    if (!node) {
      return null;
    }
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  emtpy() {
    this.head = null;
  }
};
