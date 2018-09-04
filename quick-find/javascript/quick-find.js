process.stdout.write('Hello, Quick sort\n')


class QuickFind {
  _isValidIndex(x) {
    return x > -1 && x < this.arr.length;
  }

  constructor(n) {
    // Creates the array
    this.arr = Array(Number(n)).fill(0).map((_, i) => i);
    console.log(this.arr);
  }

  isConnected(x, y) {
    if (this._isValidIndex(x) && this._isValidIndex(y)) {
      return this.arr[x] === this.arr[y];
    } else {
      console.log('Invalid Index passed. Arr is', this.arr.length)
    }
  }

  union(x, y) {
    if (this._isValidIndex(x) && this._isValidIndex(y)) {
      const xVal = this.arr[x];
      const yVal = this.arr[y];
      this.arr = this.arr.map(val => val === xVal ? yVal : val);
    console.log('union complete', this.arr)
    } else {
      console.log('Invalid Index passed. Arr is', this.arr.length)
    }
  }
}

//const isValid = x => x.trim().split().length === 2 // IS NUMBER && x.trim().split().each()

const connectedOrUnion = (dataArr, type) => {
  if (dataArr.length !== 2 && dataArr[0].trim().toLowerCase() !== type) return false;
  if (!quickFind) {
    console.log('No quick find initialized');
    return false;
  }
  return dataArr.slice(1, 3).map(Number)
}


process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on("data", _ => {
  const data = _.toString();
  const dataArr = data.trim().split(' ')
  const len = data.split().length;

  if (len === 1 && parseInt(data)) {
    const number = parseInt(data).toFixed(0);
    console.log(number)
    quickFind = new QuickFind(number)
    console.log('Quickfind created')
  } else if (connectedOrUnion(dataArr, 'c')) {
    let [x, y] = connectedOrUnion(dataArr, 'c')
    const areConnected = quickFind.isConnected(x, y)
    console.log('Conneted', areConnected)
  } else if (connectedOrUnion(dataArr, 'u')) {
    let [x, y] = connectedOrUnion(dataArr, 'u')
    quickFind.union(x, y)
  }
})