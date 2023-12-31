//node class for linkedlist
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
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Linkedlist is empty");
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

const list = new LinkedList();

console.log(list.getSize());
console.log(list.isEmpty());

list.append(10);
list.print();

list.append(20);
list.append(30);
list.print();
list.append(40);
list.print();
console.log(list.getSize());
