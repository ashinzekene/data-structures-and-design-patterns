const Stack = require('../Stack');

/**
 * Checks if a word is a palindrome
 * @param {String} x String to check
 * @return {Boolean}
 */
function isPalindrome(x) {
  const w = new Stack();
  for (let _ = 0; _ < x.length; _++) {
    w.push(x[_]);
  }
  const rWord = "";
  while (!w.isEmpty()) {
    rWord += w.pop();
  }
  return rword === x;
}

module.exports = isPalindrome;