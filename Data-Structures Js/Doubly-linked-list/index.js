//node class
class Node {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

//linkedlist class
class DoublyLinkedList {
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

  //removeFromEnd
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const val = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return val;
  }

  //printing fron the front
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let value = "";
      while (curr) {
        value += `${curr.value} `;
        curr = curr.next;
      }
      console.log(value);
    }
  }

  //printing in reverse
  printReverse() {
    if (this.isEmpty()) {
      console.log("List is empty!");
    } else {
      let curr = this.tail;
      let value = "";
      while (curr) {
        value += `${curr.value} `;
        curr = curr.prev;
      }
      console.log(value);
    }
  }
}

//testing the implementation
const list = new DoublyLinkedList();

console.log(list.isEmpty());
console.log(list.getSize());

list.append(1);
list.append(2);
list.append(3);
list.append(3);

list.print();

list.printReverse();

list.removeFromEnd();
list.print();

list.removeFromFront();
list.print();
