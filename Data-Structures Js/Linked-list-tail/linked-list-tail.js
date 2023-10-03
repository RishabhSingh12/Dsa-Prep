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
      node.next = this.tail;
      this.tail = node;
    }
    this.size++;
  }

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
