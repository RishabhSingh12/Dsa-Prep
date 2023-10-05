const LinkedList = require("./linked-list-tail");

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(val) {
    this.list.append(val);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    this.list.print();
  }
}

//testing the implementation
const queue = new LinkedListQueue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.getSize());
queue.print();

queue.dequeue();
console.log(queue.peek());
queue.print();
