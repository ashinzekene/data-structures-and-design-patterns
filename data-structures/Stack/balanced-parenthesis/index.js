const Stack = require('../Stack');

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError(`Expected a string not ${typeof str}`);
	}
	const s = new Stack();
	let bal = true;
	for (const ch of str) {
		if (ch === '(') {
			s.push('(');
		} else if (ch === ')') {
			if (s.isEmpty()) {
				bal = false;
				break;
			} else {
				s.pop();
			}
		}
	}
	return s.isEmpty() && bal;
};
