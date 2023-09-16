class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  //insertimg a new node
  insert(value) {
    const newNode = new Node(value);

    //when the tree is empty
    if (this.isEmpty()) {
      this.root = newNode;
    }
    //if the tree is filled then we recursively traverse for the perfect place in tree
    else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty());
