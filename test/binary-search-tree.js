const test = require('ava');
const BST = require('../data-structures/BinarySearchTree/BinarySearchTree');
// Const BSTNode = require('../data-structures/BinarySearchTree/BSTNode');

const bst = new BST('test-BST');

test.beforeEach(() => {
  bst.insert(1);
  bst.insert(2);
  bst.insert(3);
  bst.insert(4);
  bst.insert(5);
  bst.insert(17);
  bst.insert(27);
  bst.insert(14);
  bst.insert(23);
});

test('Binary Search Tree - insert, find', t => {
  t.true(bst.find(1));
  t.true(bst.find(2));
  t.true(bst.find(3));
  t.true(bst.find(4));
  t.true(bst.find(14));
  t.false(bst.find(19));
});
