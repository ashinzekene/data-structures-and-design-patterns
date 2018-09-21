const Queue = require('./Queue/Queue');
const PriorityQueue = require('./Queue/PriorityQueue');
const Stack = require('./Stack/Stack');

const q = new Stack('iter-queue');
const p = new PriorityQueue('iter-queue');

p.dequeue()

q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.push(5);
q.push(6);
q.push(7);
q.push(8);

// console.log(String(q))

for (x of q) {
  console.log(x);
}