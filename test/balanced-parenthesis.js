const test = require('ava');
const balParent = require('../data-structures/Stack/balanced-parenthesis');

test(`
Stack ------------
- Balanced Parenthesis
`, t => {
  t.is(balParent('()()(())'), true);
  t.is(balParent('()()(())))('), false);
  t.is(balParent('()()(()))'), false);
})
