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

  //adding a nerw node to the srtart of the list
  prepend(value) {
    //for the case when the list is empty
    const node = new Node(value);

    //for the case when the list is empty
    if (this.isEmpty()) {
      this.head = node;
    }
    //for the case when there are nodes already present in the list
    else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  insertAny(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index to insert");
      return;
    } else {
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
  }

  //for removing at any given position in a linkedlist
  removeAny(index) {
    if (index < 0 || index >= this.size) {
      console.log("index is invalid to be removed");
      return;
    }
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

  print() {
    if (this.isEmpty()) {
      console.log("Linked list is empty");
    } else {
      let curr = this.head;
      let currvalue = "";

      while (curr) {
        currvalue += `${curr.value} `;
        curr = curr.next;
      }
      console.log(currvalue);
    }
  }
}

//testing the implementation
let list = new LinkedList();
console.log(list.getSize());
console.log(list.isEmpty());

list.print();

list.insertAny(10, 0);
list.print();

list.insertAny(20, 0);
list.print();

list.insertAny(30, 1);
list.print();

list.insertAny(40, 2);
list.print();
console.log(list.getSize());

//removing case testing
list.removeAny(10);

list.removeAny(0);
list.print();

list.removeAny(2);
list.print();
console.log(list.getSize());
