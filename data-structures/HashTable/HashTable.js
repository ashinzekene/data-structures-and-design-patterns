module.exports = class HashTable {
  /**
   * A hast tab;e is usd toimplement associateive arrays or mappings of key value pairs.
   * Based on a hash function
   * @param {Number?} limit the storage limit. Default is 10
   */
  constructor(limit = 10) {
    this.table = [];
    this.storageLimit = limit;
  }

  /**
   * A function that returns a hash
   * @param {String} key the string to get a hash for
   * @param {Number?} storageLimit the max bucker size
   * @return {Number} a hash
   */
  hashFunction(key, storageLimit = this.storageLimit) {
    if (typeof key === 'string') {
      const hash = [...key].reduce((prev, curr) => prev + curr.charCodeAt(0), 0);
      return hash % storageLimit;
    }
  }

  /**
   * Adds an item to a table
   * @param {String} key string to use as key for hashing
   * @param {any} val value to be stored
   */
  add(key, val) {
    const index = this.hashFunction(key);
    if (this.table[index] === undefined) {
      this.table[index] = [[key, val]];
    } else {
      let replaced = false;
      this.table[index] = this.table[index].map(x => {
        if (x[0] === key) {
          replaced = true;
          return [val, x[1]];
        }
        return x;
      });
      if (!replaced) {
        this.table[index].push([key, val]);
      }
    }
  }

  /**
   * Removes item from a hash table based on the key
   * @param {String} key the key of the item in the table to be removed
   * @returns {Boolean} true if item was removed else false
   */
  remove(key) {
    const index = this.hashFunction(key);
    if (this.table[index]) {
      const initialLength = this.table[index].length;
      // If only one item in that bucket and is the item to be removed
      if (this.table[index].length === 1 && this.table[index][0][0] === key) {
        Reflect.deleteProperty(this.table, index);
        return true;
      }
      this.table[index] = this.table[index].filter(x => x[0] !== key);
      return this.table[index].length !== initialLength;
    }
    return false;
  }

  /**
   * Looks up for item stored in table using the key
   * @param {String} key key of item to be searched for
   * @returns {any} the item stored
   */
  lookup(key) {
    const index = this.hashFunction(key);
    if (this.table[index]) {
      const item = this.table[index].find(x => x[0] === key);
      if (item) {
        return item[1];
      }
      return false;
    }
    return false;
  }

  empty() {
    this.table = [];
  }
};
