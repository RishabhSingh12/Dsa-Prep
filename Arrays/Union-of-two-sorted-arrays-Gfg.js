// Union of two arrays can be defined as the common and distinct elements in the two arrays.
// Given two sorted arrays of size n and m respectively, find their union.

// Example 1:

// Input:
// n = 5, arr1[] = {1, 2, 3, 4, 5}
// m = 3, arr2 [] = {1, 2, 3}
// Output: 1 2 3 4 5
// Explanation: Distinct elements including
// both the arrays are: 1 2 3 4 5.

// Example 2:

// Input:
// n = 5, arr1[] = {2, 2, 3, 4, 5}
// m = 5, arr2[] = {1, 1, 2, 3, 4}
// Output: 1 2 3 4 5
// Explanation: Distinct elements including
// both the arrays are: 1 2 3 4 5.

// Example 3:

// Input:
// n = 5, arr1[] = {1, 1, 1, 1, 1}
// m = 5, arr2[] = {2, 2, 2, 2, 2}
// Output: 1 2
// Explanation: Distinct elements including
// both the arrays are: 1 2.

// Your Task:
// You do not need to read input or print anything. Complete the function findUnion() that takes two arrays arr1[], arr2[], and their size n and m as input parameters and returns a list containing the union of the two arrays.

// Expected Time Complexity: O(n+m).
// Expected Auxiliary Space: O(n+m).

// Constraints:
// 1 <= n, m <= 105
// 1 <= arr[i], brr[i] <= 106

//Solution:

class Solution {
  //Function to return a list containing the union of the two arrays.
  findUnion(arr1, arr2, n, m) {
    //your code here
    let i = 0,
      j = 0; // Pointers
    let union = [];

    while (i < n && j < m) {
      if (arr1[i] <= arr2[j]) {
        // Case 1 and 2
        if (union.length === 0 || union[union.length - 1] !== arr1[i])
          union.push(arr1[i]);
        i++;
      } else {
        // Case 3
        if (union.length === 0 || union[union.length - 1] !== arr2[j])
          union.push(arr2[j]);
        j++;
      }
    }

    while (i < n) {
      // If any elements left in arr1
      if (union[union.length - 1] !== arr1[i]) union.push(arr1[i]);
      i++;
    }

    while (j < m) {
      // If any elements left in arr2
      if (union[union.length - 1] !== arr2[j]) union.push(arr2[j]);
      j++;
    }

    return union;
  }
}
