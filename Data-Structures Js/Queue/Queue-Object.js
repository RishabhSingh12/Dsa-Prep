//Queue implementation through Object for O(1) dequeue operation

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  //adding the element in the queue
  enqueue(value) {
    this.items[this.rear] = value;
    this.rear++;
  }
}
