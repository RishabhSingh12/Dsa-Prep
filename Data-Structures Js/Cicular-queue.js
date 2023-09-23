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
  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength += 1;

      //if adding the first ever element move the front on position of rear
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log("Queue is already full !");
    }
  }

  //deleting the elements from the dequeue
  dequeue() {
    if (!this.isEmpty()) {
      const item = this.front;
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return item;
    } else return null;
  }

  //printing the top of a circular queue
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    } else {
      return null;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str = this.items[i];
      console.log(str);
    }
  }
}

//creating instance
