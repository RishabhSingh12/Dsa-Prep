// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

// Example 1:

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:

// Input: root = [1]
// Output: ["1"]

// Constraints:

// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100

//Solution:

var binaryTreePaths = function (root) {
  // let paths=[];
  if (!root) return null;

  //recursive approach
  // preOrder(root,[])
  // function preOrder(root,currPath)
  // {
  //     if(root)
  //     {
  //         currPath.push(root.val);

  //         if(root.left===null && root.right === null)
  //         {
  //             paths.push([...currPath]);
  //         }

  //         preOrder(root.left,[...currPath]);
  //         preOrder(root.right,[...currPath]);
  //     }

  // }
  // let ans =  paths.map((path)=>path.join("->"));
  // return ans;

  //iterative approach
  const stack = [[root, []]];
  const paths = [];

  while (stack.length) {
    const [node, path] = stack.pop();

    path.push(node.val);

    if (!node.left && !node.right) paths.push(path);
    else {
      if (node.left) stack.push([node.left, [...path]]);
      if (node.right) stack.push([node.right, [...path]]);
    }
  }

  let ans = paths.map((path) => path.join("->"));
  return ans;
};
