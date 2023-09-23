//circular queue implementation in js
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.currentlength = 0;
    this.front = -1;
    this.rear = -1;
    this.capacity = capacity;
  }

  //checking if the circular queue is full
  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentlength === 0;
  }

  size() {
    return this.currentlength;
  }

  //adding elememts to the circulatr queue
}
