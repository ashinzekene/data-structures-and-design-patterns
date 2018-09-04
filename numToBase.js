// import Stack from "./data-structures/Stack";

/**
 * A function that converts a number from base 10 to any base
 * @param {Number} num Number to convert(in base 10)
 * @param {Number} base Base to convert to
 */
function numberToBase(num, base) {
  // myStack = new Stack();
  str = ''
  quotient = num;
  while (quotient != 0) {
    // myStack.push(quotient % base);
    str=`${quotient % base}`+str;
    quotient = Math.floor(quotient / base);
  }
  return str;
}

function numberToBase(num, base) {
  if (num === 0) return '';
  return numberToBase(Math.floor(num / base),base) + num % base;
}