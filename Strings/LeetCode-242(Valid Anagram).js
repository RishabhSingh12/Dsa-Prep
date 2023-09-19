// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

//Solution:

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  //sorting approach

  // let sArr = s.split("");
  // let tArr = t.split("");

  // sArr = sArr.sort();
  // tArr = tArr.sort();

  // return sArr.join("") === tArr.join("");

  //hashmap approach
  let map = new Map();
  for (let c of s) {
    map.set(c, (map.get(c) | 0) + 1);
  }
  for (let d of t) {
    if (map.has(d)) {
      map.set(d, map.get(d) - 1);
      if (map.get(d) === 0) {
        map.delete(d);
      }
    } else {
      return false;
    }
  }
  if (map.size === 0) return true;
  else return false;
};
