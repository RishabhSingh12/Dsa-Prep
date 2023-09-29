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

  //for printing the nodes of the list
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());
list.print();

list.prepend(10);
list.print();

list.prepend(20);

list.prepend(30);
list.print();
