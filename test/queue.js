const test = require('ava');
const Queue = require('../data-structures/Queue/Queue');
const PriorityQueue = require('../data-structures/Queue/PriorityQueue');
const radixSort = require('../data-structures/Queue/radix-sort');

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
  t.is(queue.toString(''), '123456789')
})

test(`Queue - dequeue, back`, t => {
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  t.is(queue.back, 4);
  t.is(queue.front, 8);
  t.is(queue.toString(''), '45678')
})

test(`Queue - clear, isEmpty`, t => {
  queue.clear();
  t.true(queue.isEmpty());
  t.is(queue.length, 0);
})

test(`PriorityQueue - enqueue only items with priority property`, t => {
  const pq = new PriorityQueue();
  const item = {
    name: 'Tunde',
    priority: 1,
  }
  pq.enqueue(item);
  t.throws(() => pq.enqueue(5), Error);
  t.is(pq.length, 1);
})

test(`PriorityQueue - dequeues based on priority`, t => {
  const pq = new PriorityQueue();
  const items = [
    { name: 'Tunde', priority: 1 },
    { name: 'Ade', priority: 5 },
    { name: 'Joy', priority: 3 },
    { name: 'Becca', priority: 2 },
    { name: 'Emeka', priority: 3 },
    { name: 'Anita', priority: 9 },
    { name: 'Me', priority: 7 },
    { name: 'James', priority: 8 },
    { name: 'Femi', priority: 1 },
  ]
  items.forEach(item => pq.enqueue(item));
  t.deepEqual(pq.dequeue()[0], { name: 'Tunde', priority: 1 });
  t.deepEqual(pq.dequeue()[0], { name: 'Femi', priority: 1 });
  t.deepEqual(pq.dequeue()[0], { name: 'Becca', priority: 2 });
  t.deepEqual(pq.dequeue()[0], { name: 'Joy', priority: 3 });
  t.deepEqual(pq.dequeue()[0], { name: 'Emeka', priority: 3 });
  t.deepEqual(pq.dequeue()[0], { name: 'Ade', priority: 5 });
  t.deepEqual(pq.dequeue()[0], { name: 'Me', priority: 7 });
})

test(`Queue - Radix Sort`, t => {
  const nums = Array(50).fill(0).map(() => Math.ceil(Math.random()* 99));
  const res = radixSort(nums);
  const x = [...res];
  res.sort((x, y) => x - y);
  t.true(true);
  t.deepEqual(x, res);
})