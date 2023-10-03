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

  print() {
    if (this.isEmpty()) {
      console.log("List is enpty!");
    } else {
      let prev = this.head;
      let currValue = "";

      while (prev) {
        currValue += `${prev.value}`;
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
