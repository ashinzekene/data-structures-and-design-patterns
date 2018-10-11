module.exports = class MySet {
  constructor(name = 'MySet') {
    this.name = name;
    this.collection = [];
  }

  /**
   * Check if a value is in a set
   * @param {any} element the value to check in set
   * @returns {Boolean} True if the element is in the set
   */
  has(element) {
    return (this.collection.indexOf(element) !== -1);
  }

  /**
   * To get all items in the set as an array
   * @returns {Array} all items in the set
   */
  values() {
    return this.collection;
  }

  /**
   * Adds an element to the set
   * @param {any} element element to add to set
   * @returns {Boolean} True if successfull
   */
  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  /**
   * Removes an element from a set
   * @param {element} element element to be removed from the set
   * @returns {Boolean} True if successfull
   */
  remove(element) {
    if (this.has(element)) {
      this.collection = this.collection.filter(x => x !== element);
      return true;
    }
    return false;
  }

  /**
   * Returns the union of two sets
   * @param {MySet} set set to add to this set
   * @returns {MySet | False} The union of the two old sets or false if unsuccessfull
   */
  union(set) {
    if (set instanceof MySet) {
      const resultSet = new MySet();
      this.values().forEach(x => {
        resultSet.add(x);
      });
      set.values().forEach(x => {
        resultSet.add(x);
      });
      return resultSet;
    }
    return false;
  }

  /**
   * Returns the intersection of two sets
   * @param {MySet} set set to add to this set
   * @returns {MySet | False} The intersection of the two old sets or false if unsuccessfull
   */
  intersection(set) {
    if (set instanceof MySet) {
      const resultSet = new MySet();
      this.values().forEach(x => {
        if (set.has(x)) {
          resultSet.add(x);
        }
      });
      return resultSet;
    }
    return false;
  }

  /**
   * Returns the difference between two sets
   * @param {MySet} set set to add to this set
   * @returns {MySet | False} The difference between the two old sets or false if unsuccessfull
   */
  difference(set) {
    if (set instanceof MySet) {
      const differenceSet = new MySet();
      this.values().forEach(x => {
        if (!set.has(x)) {
          differenceSet.add(x);
        }
      });
      set.values().forEach(x => {
        if (!this.has(x)) {
          differenceSet.add(x);
        }
      });
      return differenceSet;
    }
    return false;
  }

  /**
   * Checks if a set is a subset of another set
   * @param {MySet} set the set to check
   * @returns {Boolean} True if the set is a subset
   */
  subset(set) {
    if (set instanceof MySet) {
      return set.values().every(x => {
        return this.has(x);
      });
    }
    return false;
  }

  get size() {
    return this.collection.length;
  }

  /**
   * Empties the set
   */
  empty() {
    this.collection = [];
  }
};
