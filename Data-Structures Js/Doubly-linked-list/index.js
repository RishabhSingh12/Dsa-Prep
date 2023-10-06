//node class
class Node {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

//linkedlist class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}
