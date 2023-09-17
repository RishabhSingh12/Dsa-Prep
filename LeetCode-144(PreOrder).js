// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

//Solution for iterative and recursive methods:

//iterative method:
var preorderTraversal = function (root) {
  let stack = [];
  let traversed = [];

  stack.push(root);

  //base case
  if (!root) return [];

  while (stack.length > 0) {
    const node = stack.pop();
    traversed.push(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return traversed;
};

//recursive method
// var preorderTraversal = function (root) {
//   let res = [];
//   preOrder(root);
//   function preOrder(root) {
//     if (!root) {
//       return null;
//     }
//     res.push(root.val);
//     preOrder(root.left);
//     preOrder(root.right);
//   }
//   return res;
// };
