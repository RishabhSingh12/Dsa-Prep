//Node for creating a node of a linkedlist
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//class for creating a linkedlist of nodes
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  prepend(value) {
    let currNode = new Node(value);

    if (this.isEmpty()) {
      this.head = currNode;
    } else {
      currNode.next = this.head;
      this.head = currNode;
    }
    this.size++;
  }

  insertAny(value, idx) {
    if (idx < 0 || idx > this.size) {
      console.log("invalid index to insert");
      return null;
    } else {
      if (idx === 0) {
        this.prepend(value);
      } else {
        let prev = this.head;
        const node = new Node(value);
        for (let i = 0; i < idx - 1; i++) {
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
      }
    }
  }

  removevalue(value) {
    if (this.isEmpty()) {
      console.log("List is empty!");
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }

      if (prev.next) {
        let removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      } else {
        return null;
      }
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty. Nothing to print");
      return;
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

console.log(list.isEmpty());
console.log(list.getSize());

list.insertAny(10, 0);
list.print();

list.insertAny(20, 0);
list.print();

list.insertAny(30, 1);
list.print();

list.insertAny(40, 2);
list.print();
console.log(list.getSize());

console.log(list.removevalue(40));
list.print();
console.log(list.getSize());

console.log(list.removevalue(60));
