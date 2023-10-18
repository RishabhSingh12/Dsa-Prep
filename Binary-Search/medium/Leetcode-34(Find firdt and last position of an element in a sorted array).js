// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

//Solution:
//Using upper bound and lower bound:
function upperBound(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let ans = nums.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function lowerBound(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let ans = nums.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

var searchRange = function (nums, target) {
  let lb = lowerBound(nums, target);
  if (lb === nums.length || nums[lb] !== target) {
    return [-1, -1];
  }
  return [lb, upperBound(nums, target) - 1];
};
