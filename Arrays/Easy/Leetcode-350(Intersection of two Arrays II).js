// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

//Solution:

var intersect = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;

  // brute force approach
  // time - O(n1xn2)
  // let visited = Array(n2).fill(0);
  // let result =[];

  // for(let i=0;i<n1; i++)
  // {
  //     for(let j=0;j<n2;j++)
  //     {
  //         if(nums1[i] === nums2[j] && visited[j] === 0)
  //         {
  //             result.push(nums1[i]);
  //             visited[j] = 1;
  //             break;
  //         }
  //     }
  // }
  // return result;

  //best approach
  let map = {};
  let result = [];

  for (let i = 0; i < n1; i++) {
    if (map[nums1[i]]) {
      map[nums1[i]]++;
    } else {
      map[nums1[i]] = 1;
    }
  }

  for (let i of nums2) {
    if (map[i]) {
      result.push(i);
      map[i]--;
    }
  }

  return result;
};
