const test = require('ava');
const HashTable = require('../data-structures/HashTable/HashTable');

const ht = new HashTable();

test.beforeEach(() => {
  ht.empty();
  ht.add('fname', 'Ekene');
  ht.add('lname', 'Ashinze');
  ht.add('oname', 'Onyeluka');
  ht.add('degeducation', 'BSc');
  ht.add('school', 'Unilag');
  ht.add('dept', 'Cellbiology and Genetics');
});

test('Hash Table - lookup', t => {
  t.is(ht.lookup('oname'), 'Onyeluka');
  t.is(ht.lookup('fname'), 'Ekene');
  t.false(ht.lookup('something'));
  t.false(ht.lookup('shitmehn'));
});

test('Hash Table - remove', t => {
  t.true(ht.remove('oname'));
  t.false(ht.remove('oname'));
  t.false(ht.lookup('oname'));
  t.true(ht.remove('fname'));
  t.false(ht.lookup('fname'));
  t.false(ht.remove('something'));
  t.false(ht.remove('shitmehn'));
});
