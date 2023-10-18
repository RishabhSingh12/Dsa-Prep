function findCeil(arr, x) {
  let low = 0,
    high = arr.length - 1;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // maybe an answer
    if (arr[mid] >= x) {
      ans = arr[mid];
      //look for smaller index on the left
      high = mid - 1;
    } else {
      low = mid + 1; // look on the right
    }
  }
  return ans;
}

//testing the implementation
const arr = [1, 4, 5, 13, 18, 25, 40];

let res = findCeil(arr, 14);

console.log(res);
