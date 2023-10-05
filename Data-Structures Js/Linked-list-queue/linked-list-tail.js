class Node {
  constructor(val) {
    this.value = val;
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

  //add to front
  prepend(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //adding to the bottom
  append(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.size++;
  }
}
