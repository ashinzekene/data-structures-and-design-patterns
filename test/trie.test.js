const test = require('ava');
const Trie = require('../data-structures/Trie/Trie');

const trie = new Trie('test-trie');

test.beforeEach(() => {
  trie.add('draw');
  trie.add('dress');
  trie.add('bell');
  trie.add('best');
  trie.add('great');
  trie.add('sand');
  trie.add('sandal');
});

test('TRIE: add, isWord', t => {
  t.true(trie.isWord('draw'));
  t.true(trie.isWord('sand'));
  t.true(trie.isWord('sandal'));
  t.false(trie.isWord('element'));
  t.false(trie.isWord('sing'));
  t.false(trie.isWord('sandalee'));
});

test('TRIE:', t => {
  t.is(trie.getAll().length, 7);
  t.true(trie.getAll().includes('sandal'));
  t.true(trie.getAll().includes('sand'));
  t.true(trie.getAll().includes('draw'));
  t.true(trie.getAll().includes('great'));
  t.false(trie.getAll().includes('somthingelse'));
  t.false(trie.getAll().includes('rubbish'));
});
