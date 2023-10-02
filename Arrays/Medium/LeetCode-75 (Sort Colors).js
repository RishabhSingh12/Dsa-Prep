// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.

//Solution:

//Dutch National Flag Algorithm

var sortColors = function (nums) {
  // Keep three indices beg = 0, mid = 0 and end = nums.length-1...
  // There are four ranges, 1 to beg (the range containing 0), beg to mid (the range containing 1), mid to end (the range containing unknown elements) and end to nums.length (the range containing 2)...
  let beg = 0;
  let end = nums.length - 1;
  let mid = 0;
  let temp = 0;
  // Traverse the array from start to end and mid is less than end...
  while (mid <= end) {
    // If the element is 0...
    if (nums[mid] == 0) {
      // swap the element with the element at index beg...
      temp = nums[beg];
      nums[beg] = nums[mid];
      nums[mid] = temp;
      // Update beg = beg + 1 and mid = mid + 1...
      beg++;
      mid++;
    }
    // If the element is 1 then update mid = mid + 1...
    else if (nums[mid] == 1) {
      mid++;
    }
    // If the element is 2...
    else {
      // Swap the element with the element at index end...
      temp = nums[mid];
      nums[mid] = nums[end];
      nums[end] = temp;
      // Update end = end – 1...
      end--;
    }
  }
};
