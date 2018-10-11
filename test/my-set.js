const test = require('ava');
const MySet = require('../data-structures/Set/Set');

const setA = new MySet();
const setB = new MySet();

test.beforeEach(() => {
  setA.empty();
  setB.empty();
  setA.add('a');
  setA.add('b');
  setA.add('c');
  setA.add('d');
  setA.add('e');
  setA.add('f');
  setA.add('g');
  setA.add('h');
  setA.add('i');
  setB.add('f');
  setB.add('g');
  setB.add('h');
  setB.add('i');
});

test('SET - has', t => {
  t.true(setA.has('a'));
  t.false(setA.has('z'));
  t.true(setA.has('b'));
});

test('SET - add, size', t => {
  t.is(setA.size, 9);
  t.false(setA.add('a'));
  t.is(setA.size, 9);
  t.true(setA.add('z'));
  t.is(setA.size, 10);
});

test('SET - values, remove, size', t => {
  t.is(setA.size, setA.values().length);
  t.true(setA.remove('a'));
  t.is(setA.size, 8);
  t.false(setA.remove('a'));
  t.is(setA.size, 8);
  t.false(setA.remove('z'));
  t.is(setA.size, 8);
  t.true(setA.remove('d'));
  t.is(setA.size, 7);
});
