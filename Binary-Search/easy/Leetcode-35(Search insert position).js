// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

//Solution:

var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  let ans = high + 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] >= target) {
      ans = mid;
      //look for more smaller index on left;
      high = mid - 1;
    } else {
      //look for right
      low = mid + 1;
    }
  }
  return ans;
};
