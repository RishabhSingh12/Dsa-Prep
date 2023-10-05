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
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.size++;
  }

  //removefromend
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    } else {
      let prev = this.head;
      while (prev.next && prev.next !== this.tail) {
        prev = prev.next;
      }
      const val = this.tail.value;
      prev.next = null;
      this.tail = prev;
      this.size--;
      return val;
    }
  }

  //removeFromFront
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const val = this.head.value;
    let prev = this.head;
    this.head = this.head.next;
    prev.next = null;
    this.size--;
    return val;
  }

  //printing the values
  print() {
    if (this.isEmpty()) {
      console.log("List is empty!");
    } else {
      let curr = this.head;
      let currValue = "";
      while (curr) {
        currValue += `${curr.value} `;
        curr = curr.next;
      }
      console.log(currValue);
    }
  }
}

//testing the implementation
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

list.print();

console.log(list.removeFromFront());

list.print();
