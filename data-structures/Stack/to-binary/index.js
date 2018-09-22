const Stack = require('../Stack');

/**
 * Convert numbers from one base to another
 * @param {number} x number to convert
 * @param {number} y base to convert to
 * @return {number} Result of the function
 */
function toBinary(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('Expected both arguments to be numbers');
  }
  const s = new Stack();
  let z = x;
  while (z > 0) {
    s.push(z % y);
    z = Math.floor(z / y);
  }
  let str = '';
  while (!s.isEmpty()) {
    str += s.pop();
  }
  return str;
}

module.exports = toBinary;
