class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
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

  //adding items to the front of the list
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

  //adding at the end of the node
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

  //removing from the front
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }

  //remove from the last
  removeFromtheLast() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  //printing the value of linked list
  print() {
    if (this.isEmpty()) {
      console.log("List is empty!");
    } else {
      let prev = this.head;
      let currValue = "";

      while (prev) {
        currValue += `${prev.value} `;
        prev = prev.next;
      }
      console.log(currValue);
    }
  }
}

//testing the implementation

const list = new Linkedlist();
console.log(list.isEmpty());
console.log(list.getSize());
list.print();

//inserting values
list.append(5);
list.print();
list.prepend(10);
list.print();

//removing from the front
// list.removeFromFront();

//remove from the last
list.removeFromtheLast();
list.print();
