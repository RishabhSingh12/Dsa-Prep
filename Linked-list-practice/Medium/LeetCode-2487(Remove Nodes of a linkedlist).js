// You are given the head of a linked list.

// Remove every node which has a node with a greater value anywhere to the right side of it.

// Return the head of the modified linked list.

// Example 1:

// Input: head = [5,2,13,3,8]
// Output: [13,8]
// Explanation: The nodes that should be removed are 5, 2 and 3.
// - Node 13 is to the right of node 5.
// - Node 13 is to the right of node 2.
// - Node 8 is to the right of node 3.
// Example 2:

// Input: head = [1,1,1,1]
// Output: [1,1,1,1]
// Explanation: Every node has value 1, so no nodes are removed.

// Constraints:

// The number of the nodes in the given list is in the range [1, 105].
// 1 <= Node.val <= 105

//Solution:

var removeNodes = function (head) {
  //recursion approach
  // if (!head) return null;

  // head.next = removeNodes(head.next);

  // if (head.next && head.val < head.next.val) {
  //   return head.next;
  // }

  // return head;

  //stack approach
  // const stack = [];

  // while (head) {
  //   while (stack.length && head.val > stack[stack.length - 1]) {
  //     stack.pop();
  //   }
  //   stack.push(head.val);
  //   head = head.next;
  // }

  // //putting elements left in astack to a new answer list
  // while (stack.length) {
  //   head = new ListNode(stack.pop(), head);
  // }
  // return head;

  //reverse approach
  let curr = reverse(head);
  let max = -Infinity;

  let ans = null;
  let ansCurr = null;

  while (curr) {
    if (curr.val >= max) {
      max = curr.val;
      if (!ans) {
        ans = curr;
        ansCurr = curr;
      } else {
        ansCurr.next = curr;
        ansCurr = ansCurr.next;
      }
    }
    curr = curr.next;
  }
  ansCurr.next = null;
  return reverse(ans);
};

//reverse function
function reverse(head) {
  let curr = head;
  let prev = null;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
