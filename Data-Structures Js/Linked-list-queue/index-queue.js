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
    return this.head.value;
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
