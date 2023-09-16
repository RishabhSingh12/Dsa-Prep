// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

//solution
var inorderTraversal = function (root) {
  let result = [];
  //recursive approach
  // let res = [];
  // inOrder(root);
  // function inOrder(root)
  // {
  //     if(!root) return null;

  //     inOrder(root.left);
  //     res.push(root.val);
  //     inOrder(root.right);
  // }
  // return res;

  //iterative approach
  let stack = [];
  //current node pointer
  let currentNode = root;

  while (currentNode || stack.length) {
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      //after finishing the loop we are the leftmost node and we need to pop it out
      currentNode = stack.pop();
      //we add currentNode to the result
      result.push(currentNode.val);

      // then we point the pointer to the right node
      currentNode = currentNode.right;
    }
  }
  return result;
};
