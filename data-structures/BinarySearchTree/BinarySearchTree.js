module.exports = class BinarySearchTree {
  construtor(name = 'bst') {
    this.name = name;
    this.head = null;
  }

  /**
   * Change item to number if possible else return false
   * @param {any} elem item to change to number
   * @returns {Number|False}
   */
  static toNumber(elem) {
    if (typeof elem === 'number') return elem;
    eleme = Number(elem);
    return elem !== elem ? false : elem;
  }

  append(element) {
    element = BST.toNumber(element);
    if (!element) {
      console.log('Can only insert a Number to a BST');
      return false;
    }

    const newNode = new BSTNode(element);
    if (this.head === null) {
      this.head = newNode;
      return true;
    }
    /**
     *
     * @param {BSTNode} node
     */
    const searchParent = function(node) {
      if (element > node.element) {
        if (node.right) {
          searchParent(node.right)
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
    }
    searchParent(this.head);
  }

}

module.exports = BST;