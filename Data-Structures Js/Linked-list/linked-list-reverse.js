//class for a node of a linkedlist
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//class for linkedlist
class Linkedlist {
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

  insertAny(value, index) {
    if (index < 0 || index > this.size) {
      console.log("invalid index to insert at");
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeany(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index to remove");
      return;
    } else {
      let removeNode;
      if (index === 0) {
        removeNode = this.head;
        this.head = this.head.next;
      } else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        removeNode = prev.next;
        prev.next = removeNode.next;
      }
      this.size--;
      return removeNode.value;
    }
  }

  reverse() {
    let curr = this.head;
    let prev = null;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Nothing to print.List is empty");
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
const list = new Linkedlist();
console.log(list.getSize());
console.log(list.isEmpty());

list.insertAny(10, 0);
list.insertAny(20, 0);
list.insertAny(30, 0);

list.print();

// list.removeany(1);
list.reverse();
list.print();
