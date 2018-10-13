const isEnd = Symbol('is-end');

module.exports = class TrieNode {
  constructor() {
    this.keys = new Map();
    this[isEnd] = false;
  }

  get isEnd() {
    return this[isEnd];
  }

  setEnd(end = false) {
    this[isEnd] = Boolean(end);
  }
};
