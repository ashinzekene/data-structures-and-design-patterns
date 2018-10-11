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

test('SET - intersection, subset', t => {
  const intersect = setA.intersection(setB);
  t.true(intersect instanceof MySet);
  t.true(setA.subset(intersect));
  t.true(setB.subset(intersect));
  t.is(intersect.size, 4);
  t.true(intersect.has('f'));
  t.true(intersect.has('g'));
  t.true(intersect.has('h'));
  t.true(intersect.has('i'));
  t.false(intersect.has('a'));
});

test('SET - difference, union, subset', t => {
  setA.add('k');
  setA.add('l');
  setA.add('m');
  setA.add('n');
  setB.add('o');
  setB.add('p');
  setB.add('q');
  const difference = setA.difference(setB);
  const union = setA.union(setB);
  t.true(difference instanceof MySet);
  t.false(setA.subset(difference));
  t.false(setB.subset(difference));
  t.true(union instanceof MySet);
  t.true(union.subset(difference));
  t.true(union.subset(setA));
  t.true(union.subset(setB));
});
