const test = require('ava');
const DoubleLinkedList = require('../data-structures/DoubleLinkedList/DoubleLinkedList');
const Node = require('../data-structures/DoubleLinkedList/Node');


const lList = new DoubleLinkedList();

test.beforeEach(() => {
  lList.clear();
  lList.append(1);
  lList.append(2);
  lList.append(3);
  lList.append(4);
  lList.append(5);
  lList.append(6);
  lList.append(7);
  lList.append(8);
});

test('Linked List - size, find', t => {
  const x = lList.find(5);
  t.true(x instanceof Node);
  t.is(x.element, 5);
  t.is(lList.size, 8);
});

test('Linked List - remove, size, find', t => {
  lList.remove(4);
  lList.remove(3);
  t.is(lList.size, 6);
  t.false(lList.remove(30));
  t.is(lList.find(4), null);
  t.is(lList.find(3), null);
});

test('Linked List - append, size, find', t => {
  lList.append(10);
  lList.insert(9, 8);
  t.is(lList.size, 10);
  t.is(lList.find(8).next.element, 9);
  t.deepEqual(lList.find(9).next, new Node(10));
});

test('Linked List - toString, clear, isEmpty', t => {
  t.is(lList.toString().split(',').length, lList.size);
  lList.clear();
  t.true(lList.isEmpty());
});
