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

  find(x) {
    const element = BinarySearchTree.toNumber(x);
    if (!element) {
      console.log('Can only insert a Number to a BST');
      return false;
    }
    let node = this.head;
    /**
     * Searching
     * @param {BSTNode} node the element to search
     * @returns {Boolean} True if element is present
     */
    while (node) {
      if (node.element === element) {
        return true;
      }
      if (node.element > element) {
        node = node.left;
      } else if (node.element < element) {
        node = node.right;
      }
    }
    return false;
  }
};
