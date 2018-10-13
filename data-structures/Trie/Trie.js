const TrieNode = require('./TrieNode');

module.exports = class Trie {
  constructor(name = 'Trie') {
    this.name = name;
    this.head = new TrieNode();
    this.head.keys = new Map();
  }

  /**
   * Adds a word into a trie
   * @param {String} string string tk append to trie
   * @param {TrieNode?} node the node to append string to
   * @returns {void}
   */
  add(string) {
    let node = this.head;
    [...string].forEach((char, i) => {
      if (!node.keys.has(char)) {
        node.keys.set(char, new TrieNode());
        if (i === (string.length - 1)) {
          node.keys.get(char).setEnd(true);
        }
      }
      node = node.keys.get(char);
    });
  }

  /**
   * Checks for the presence of a string in a trie
   * @param {String} string the string to check for in the trie
   * @returns {Boolean} true if present else false
   */
  isWord(string) {
    let node = this.head;
    while (string.length > 1) {
      if (node.keys.has(string[0])) {
        node = node.keys.get(string[0]);
        string = string.substr(1);
      } else {
        return false;
      }
    }
    return node.keys.has(string[0]) && node.keys.get(string[0]).isEnd;
  }

  getAll() {
    const words = [];
    /**
     * @param {TrieNode} node crrent node to search
     * @param {string} string string result
     */
    const search = (node, string) => {
      if (node.keys.size) {
        for (const letter of node.keys.keys()) {
          if (node.keys.get(letter).isEnd) {
            words.push(string + letter);
          }
          search(node.keys.get(letter), string + letter);
        }
      }
    };
    search(this.head, '');
    return words;
  }
};

