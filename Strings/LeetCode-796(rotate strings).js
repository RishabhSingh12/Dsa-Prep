// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false

// Constraints:

// 1 <= s.length, goal.length <= 100
// s and goal consist of lowercase English letters.

//solution:

var rotateString = function (s, goal) {
  let n = s.length;

  if (s.length !== goal.length) return false;

  //O(n2) approach;
  // let sourceArr = s.split("");

  // for(let i=0;i<n;i++)
  // {
  //     let removed = sourceArr.shift();
  //     sourceArr.push(removed);
  //     let newStr = sourceArr.join("");
  //     if(newStr === goal) return true;
  // }
  // return false;

  //O(n) approach
  const concatString = s + s;

  if (concatString.indexOf(goal) !== -1) return true;

  return false;
};
