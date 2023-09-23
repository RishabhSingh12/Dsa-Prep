//implementattion for queue
class Queue {
  constructor() {
    this.items = [];
  }

  //for adding element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  //for removing an element from the front of the queue
  dequeue() {
    return this.items.shift();
  }

  //to check whether the queue is empty or not
  isEmpty() {
    return this.items.length === 0;
  }

  //to check for the frontmost element of a queue
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  //to return the size of the queue
  size() {
    return this.items.length;
  }

  //to return the items in the queue
  print() {
    console.log(this.items.toString());
  }
}

//making the instance and using the queue
const queue = new Queue();
console.log(queue.isEmpty());

//adding elements
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(queue.size());

queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
