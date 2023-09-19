// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

//Solution:

var rotate = function (nums, k) {
  let n = nums.length;
  let temp = [];

  k = k % n;

  //naive approach
  // for(let i=0;i<k;i++)
  // {
  //     temp.push(nums[i]);
  // }

  // for(let i=k;i<n;i++)
  // {
  //     nums[i-k] = nums[i];
  // }

  // for(let i=n-k;i<n;i++)
  // {
  //     nums[i] = temp[i-(n-k)];
  // }

  //better approach
  if (n === 0 || k === 0 || k === n) return;

  const reverse = (start, end, arr) => {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;

      start++;
      end--;
    }
  };

  reverse(0, n - 1, nums);
  reverse(0, k - 1, nums);
  reverse(k, n - 1, nums);
};
