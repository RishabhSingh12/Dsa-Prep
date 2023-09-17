//Question:
// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

// Constraints:

// The number of the nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?

//Solution:

var postorderTraversal = function (root) {
  //recursive approach
  // let res = [];
  // postOrder(root);
  // function postOrder(root)
  // {
  //     if(!root)
  //     {
  //         return null;
  //     }
  //     postOrder(root.left);
  //     postOrder(root.right);
  //     res.push(root.val);
  // }
  // return res;

  //iterative method
  let stack = [];
  let res = [];

  if (!root) return [];

  stack.push(root);

  while (stack.length) {
    let currEle = stack.pop();
    //adding to the front and not top of the array
    res.unshift(currEle.val);

    if (currEle.left) {
      stack.push(currEle.left);
    }

    if (currEle.right) {
      stack.push(currEle.right);
    }
  }

  return res;
};
