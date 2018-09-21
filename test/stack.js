const test = require('ava');
const Stack = require('../data-structures/Stack/Stack');

const stack = new Stack();

test.beforeEach(t => {
  stack.clear();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  stack.push(6);
  stack.push(7);
  stack.push(8);
})

test(`Stack - push, length, peek`, t => {
  stack.push(9);
  t.is(stack.length, 9);
  t.is(stack.peek(), 9);
  t.is(stack.toString(''), '123456789');
})

test(`Stack - pop, isEmpty`, t => {
  stack.pop();
  stack.pop();
  t.is(stack.length, 6);
  t.false(stack.isEmpty());
  t.is(stack.toString(''), '123456');
})

test(`Stack - pop, toString`, t => {
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  t.is(stack.toString(''), '123');
})

test(`Stack - clear, isEmpty`, t => {
  stack.clear();
  t.true(stack.isEmpty());
  t.is(stack.length, 0);
})
