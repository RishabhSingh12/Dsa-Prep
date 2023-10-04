const LinkedList = require("./linked-list");

class LinkedlistStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromEnd();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}
