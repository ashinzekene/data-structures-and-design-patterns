import BSTNode from "./BSTNode.js"

export class BinarySearchTree {
  /**
   * Create a binary search tree
   * @param head the value to insert into the head node
   */
  constructor(head) {
    this.head = new BSTNode(head);
  }
  
  insert(element) {
    const newNode = new BSTNode(element);
    if (this.head === null) {
      this.head = newNode;
      return
    }
      
    /**
     * Search for a new node to insert an exisiting noe
     * @param {BSTNode} node the node to insert into
     */
    function insertNode(node) {
      if (node.element > newNode.element) {
        if (node.right !== null) {
          return insertNode(node.right);
        } else {
          node.right = newNode;
        }
      } else {
        if (node.left !== null) {
          return insertNode(node.left);
        } else {
          node.left = newNode;
        }
      }
    }
    
    insertNode(this.head)
  }
  
  find(element) {
    if (this.head === null) return null
    
    /**
     * Search for node containing an element
     * @param {BSTNode} node node to be searched
     */
    function searchNode(node) {
      if (node.element === element) {
        return node;
      } else if (node.element > element) {
        if (node.right === null) return null;
        return searchNode(node.right);
      } else {
        if (node.left == null) return null;
        return searchNode(node.left);
      }
    }
    return searchNode(this.head);
  }
  
  /**
   * Tranverses a binary search tree by post order
   * @param {BSTNode} node the node to transvers
   */
  preOrder() {
    function transverseNode(node, result) {
      result.push(node)
      if (node.left) {
        transverseNode(node.left)
      }
      if (node.right) {
        transverseNode(node.right)
      }
    }
    return transverseNode(this.head, [])
  }
  
  /**
  * Tranverses a binary search tree pre order
  * @returns {[]BSTNode} all the nodes
  */
  preOrder() {
    function transverseNode(node, result) {
      result.push(node)
      if (node.left) {
        transverseNode(node.left)
      }
      if (node.right) {
        transverseNode(node.right)
      }
    }
    return transverseNode(this.head, [])
  }
  
  /**
  * Tranverses a binary search tree post order
  * @returns {[]BSTNode} all the nodes
  */
  postOrder() {
    function transverseNode(node, result) {
      if (node.left) {
        transverseNode(node.left)
      }
      if (node.right) {
        transverseNode(node.right)
      }
      result.push(node)
    }
    return transverseNode(this.head, [])
  }
  
  /**
   * Tranverses a binary search tree in order
   * @returns {[]BSTNode} all the nodes
   */
  inOrder() {
    function transverseNode(node, result) {
      if (node.left) {
        transverseNode(node.left)
      }
      result.push(node)
      if (node.right) {
        transverseNode(node.right)
      }
    }
    return transverseNode(this.head, [])
  }
    
  levelOrder() {
    
  }

  [Symbol.toStringTag] = 'Binary Search Tree'
}