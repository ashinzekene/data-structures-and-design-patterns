// Import Stack from "./data-structures/Stack";

/**
 * A function that converts a number from base 10 to any base
 * @param {Number} num Number to convert(in base 10)
 * @param {Number} base Base to convert to
 * @returns {Number} The result
 */
const numberToBase = (num, base) => {
	// MyStack = new Stack();
	let str = '';
	let quotient = num;
	while (quotient !== 0) {
		// MyStack.push(quotient % base);
		str = `${quotient % base}` + str;
		quotient = Math.floor(quotient / base);
	}
	return str;
};
module.export.numberToBase = numberToBase;

/**
 * A function that converts a number from base 10 to any base
 * @param {Number} num Number to convert(in base 10)
 * @param {Number} base Base to convert to
 * @returns {Number} The result
 */
const numberToBaseRe = (num, base) => {
	if (num === 0) {
		return '';
	}
	return numberToBase(Math.floor(num / base), base) + (num % base);
};
module.export.numberToBaseRe = numberToBaseRe;
