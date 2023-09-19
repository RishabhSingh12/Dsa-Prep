// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

// Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:

// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]

// Constraints:

// 1 <= s1.length, s2.length <= 200
// s1 and s2 consist of lowercase English letters and spaces.
// s1 and s2 do not have leading or trailing spaces.
// All the words in s1 and s2 are separated by a single space.

//Solution:

var uncommonFromSentences = function (s1, s2) {
  let s1Arr = s1.split(" ");
  let s2Arr = s2.split(" ");

  let result = [];

  //using two hashmaps
  // const s1hash ={}; const s2hash = {};

  //     for(let i=0;i<s1Arr.length;i++)
  //     {

  //             if(s1hash[s1Arr[i]]) s1hash[s1Arr[i]] += 1;
  //             else s1hash[s1Arr[i]] = 1;

  //     }

  //     for(let i=0;i<s2Arr.length;i++)
  //     {

  //             if(s2hash[s2Arr[i]]) s2hash[s2Arr[i]] += 1;
  //             else s2hash[s2Arr[i]] = 1;

  //     }

  // //iterating and adding keys with value 1 to the result
  // for(let i in s1hash)
  // {
  //     if(s1hash[i] === 1 && !(i in s2hash)) result.push(i);
  // }

  // for(let i in s2hash )
  // {
  //     if(s2hash[i] === 1 && !(i in s1hash)) result.push(i);
  // }

  // return result;

  //using single hashmap:
  const hash = {};

  for (let i = 0; i < s1Arr.length; i++) {
    if (hash[s1Arr[i]]) hash[s1Arr[i]] += 1;
    else hash[s1Arr[i]] = 1;
  }

  for (let i = 0; i < s2Arr.length; i++) {
    if (hash[s2Arr[i]]) hash[s2Arr[i]] += 1;
    else hash[s2Arr[i]] = 1;
  }

  for (let i in hash) {
    if (hash[i] === 1) {
      result.push(i);
    }
  }

  return result;
};
