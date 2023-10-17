const upperBound = (arr, x) => {
  let low = 0;
  let high = arr.length - 1;

  let ans = high + 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > x) {
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

const arr = [3, 5, 8, 15, 19];
let res = upperBound(arr, 20);

if (res >= arr.length) {
  console.log("Not found");
} else {
  console.log("result = ", res);
}
