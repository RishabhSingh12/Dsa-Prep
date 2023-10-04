//node class
class Node {
  constructor(value) {
    this.value = value;
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

  //adding items to the front
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

  //adding items to the bottom
  append(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.size++;
  }

  //removefromfront
  removefromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    // let curr = this.head;
    this.head = this.head.next;
    // curr.next = null;
    this.size--;
    return value;
  }

  //removeFromEnd
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    let prev = this.head;
    while (prev.next && prev.next !== this.tail) {
      prev = prev.next;
    }
    prev.next = null;
    this.tail = prev;
    this.size--;
    return value;
  }
}

module.exports = LinkedList;
