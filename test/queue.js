const test = require('ava');
const Queue = require('../data-structures/Queue/Queue');

const queue = new Queue();

test.beforeEach(t => {
  queue.clear();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  queue.enqueue(6);
  queue.enqueue(7);
  queue.enqueue(8);
})

test(`Queue - enqueue, front, length`, t => {
  queue.enqueue(9);
  t.is(queue.length, 9);
  t.is(queue.front, 9);
  t.is(queue.toString(), '123456789')
})

test(`Queue - dequeue, back`, t => {
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  t.is(queue.back, 4);
  t.is(queue.front, 8);
  t.is(queue.toString(), '45678')
})

test(`Queue - clear, isEmpty`, t => {
  queue.clear();
  t.true(queue.isEmpty());
  t.is(queue.length, 0);
})
