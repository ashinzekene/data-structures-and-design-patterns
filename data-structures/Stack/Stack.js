export default class Stack {
  constructor() {
    this.list = [];
    this.top = 0
  }

  push(x) {
    this.list[this.top++] = x;
  }

  pop(x) {
    this.list.splice(-1, 1);
  }

  isEmpty() {
    return !this.list.length
  }

  get length() {
    return this.top
  }

  clear() {
    this.list = [];
    this.top = 0;
  }

  peek() {
    return this.list[this.top - 1];
  }

  toString(sep = '') {
    return this.list.join(sep)
  }

}