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
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insertAny(value, idx) {
    if (idx < 0 || idx > this.size) {
      console.log("Invalid index to insert");
      return;
    }

    if (idx === 0) {
      this.prepend(value);
    } else {
      let prev = this.head;
      let currNode = new Node(value);
      for (let i = 0; i < idx - 1; i++) {
        prev = prev.next;
      }
      currNode.next = prev.next;
      prev.next = currNode;
      this.size++;
    }
  }

  //for printing the values
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    } else {
      let currNode = this.head;
      let currValue = "";
      while (currNode) {
        currValue += `${currNode.value} `;
        currNode = currNode.next;
      }
      console.log(currValue);
    }
  }

  //for searching a vlaue in the list
  search(value) {
    if (this.isEmpty()) {
      return -1;
    } else {
      let i = 0;
      let curr = this.head;
      while (curr) {
        if (curr.value === value) {
          return i;
        } else {
          curr = curr.next;
          i++;
        }
      }
      return -1;
    }
  }
}

//testing the implementation
const list = new LinkedList();

console.log(list.getSize());
console.log(list.isEmpty());

list.insertAny(10, 0);
list.print();
list.insertAny(20, 1);
list.insertAny(60, 0);
list.print();

console.log(list.search(40));
