export default class BSTNode {
  constructor(element) {
    if (typeof element !== "number") {
      throw new Error(`Expected value to be a number. Got ${element} instead`);
    }
    this.element = element;
    this.left = null;
    this.right = null;
  }
};
