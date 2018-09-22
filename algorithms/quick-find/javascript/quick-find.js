module.exports = class QuickFind {
  _isValidIndex(x) {
    return x > -1 && x < this.arr.length;
  }

  constructor(n) {
    // Creates the array
    this.arr = new Array(Number(n)).fill(0).map((_, i) => i);
    console.log(this.arr);
  }

  isConnected(x, y) {
    if (this._isValidIndex(x) && this._isValidIndex(y)) {
      return this.arr[x] === this.arr[y];
    }
    console.log('Invalid Index passed. Arr is', this.arr.length);
  }

  union(x, y) {
    if (this._isValidIndex(x) && this._isValidIndex(y)) {
      const xVal = this.arr[x];
      const yVal = this.arr[y];
      this.arr = this.arr.map(val => val === xVal ? yVal : val);
      console.log('union complete', this.arr);
    } else {
      console.log('Invalid Index passed. Arr is', this.arr.length);
    }
  }
};
