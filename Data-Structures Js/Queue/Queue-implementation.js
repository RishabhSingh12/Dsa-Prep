//implementattion for queue
class Queue {
  constructor() {
    this.item = [];
  }

  //for adding element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  //for removing an element from the front of the queue
  dequeue() {
    return this.items.shift();
  }
}
