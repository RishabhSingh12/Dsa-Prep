//Question Statement:

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8

//Solution:

var generateParenthesis = function (n) {
  let result = [];

  helper(result, 0, 0, n, "");
  return result;
};

function helper(result, open, close, n, current) {
  if (current.length === 2 * n) {
    result.push(current);
    return;
  }

  if (open < n) helper(result, open + 1, close, n, current + "(");
  if (close < open) helper(result, open, close + 1, n, current + ")");
}
