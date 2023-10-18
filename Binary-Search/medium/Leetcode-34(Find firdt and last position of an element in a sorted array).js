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
// function upperBound(nums,target)
// {
//     let low = 0;
//     let high = nums.length - 1;
//     let ans = nums.length;
//     while(low<=high)
//     {
//         let mid = Math.floor((low+high)/2);
//         if(nums[mid]>target)
//         {
//             ans = mid
//             high = mid - 1;
//         }
//         else
//         {
//             low = mid + 1;
//         }
//     }
//     return ans;
// }

// function lowerBound(nums,target)
// {
//     let low = 0;
//     let high = nums.length - 1;
//     let ans = nums.length;
//     while(low<=high)
//     {
//         let mid = Math.floor((low+high)/2);
//         if(nums[mid]>=target)
//         {
//             ans = mid
//             high = mid - 1;
//         }
//         else
//         {
//             low = mid + 1;
//         }
//     }
//     return ans;
// }

function firstOccurrence(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let first = -1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) {
      first = mid;
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return first;
}

function lastOccurrence(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let last = -1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) {
      last = mid;
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return last;
}

var searchRange = function (nums, target) {
  //using upper and lower bound technique
  // let lb = lowerBound(nums,target);
  // if(lb === nums.length || nums[lb]!==target)
  // {
  //     return [-1,-1];
  // }
  // return [lb,upperBound(nums,target)-1];

  //using first and last occurrence technique
  let first = firstOccurrence(nums, target);
  if (first === -1) return [-1, -1];
  let last = lastOccurrence(nums, target);
  return [first, last];
};
