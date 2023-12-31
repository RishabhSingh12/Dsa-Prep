const LinkedList = require("./linked-list");

class LinkedlistStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  peek() {
    return this.list.head.value;
  }

  pop() {
    return this.list.removefromFront();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

//testing the implementation
const stack = new LinkedlistStack();
console.log(stack.isEmpty());

//pushing the elements
stack.push(20);
stack.push(10);
stack.push(30);

stack.print();

console.log(stack.getSize());

//popping elements
console.log(stack.pop());

stack.print();

console.log(stack.peek());
