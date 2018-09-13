const Stack = require('../Stack');

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError(`Expected a string not ${typeof str}`);
	}
	const s = new Stack();
	for (let z = 0; z < 4; z++) {
		s.push(3);
		console.log(s.length);
		s.pop(3);
		console.log(s.length);
		console.log(s);
	}
	s.isEmpty();

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
				console.log(s.length);
			}
		}
	}
	console.log(s.isEmpty());
	console.log(bal);
	return s.isEmpty() && bal;
};
