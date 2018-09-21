const Queue = require('./Queue');

const q = new Queue('iter-queue');

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);
q.enqueue(8);

console.log(String(q))

for (x of q) {
  console.log(x);
}