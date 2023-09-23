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

  //for removing the element from front of the queue
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  //checking if the queue is empty
  isEmpty() {
    return this.rear - this.front === 0;
  }

  //checking the top element of a queue
  peek() {
    return this.items[this.front];
  }

  //checking the size of the queue
  size() {
    return this.rear - this.front;
  }

  //printing the queue elements
  print() {
    console.table(this.items);
  }
}

//creating instance and checking the implementatioh
const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek());

console.log(queue.dequeue());

console.log(queue.peek());

console.log(queue.size());

queue.print();
