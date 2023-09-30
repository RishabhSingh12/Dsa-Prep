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
      while (prev && prev.next.value !== value) {
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
        currValue += `${curr.value}`;
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
