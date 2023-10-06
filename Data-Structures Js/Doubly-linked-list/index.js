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

  //adding values to front of a doubly linked list
  prepend(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  //adding values to end of a doubly linked list
  append(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  //removeFrom front
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const val = this.head.value;
    this.head = this.head.next;
    this.size--;
    return val;
  }
}
