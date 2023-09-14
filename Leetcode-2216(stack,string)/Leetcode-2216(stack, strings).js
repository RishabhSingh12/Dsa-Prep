// 2116. Check if a Parentheses String Can Be Valid

/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  let n = s.length;

  //intution is keeping the count of closing and opening brackets and if at any time cosing > opening return false
  let close = 0;
  let open = 0;

  if (n & 1) return false;

  //step1 : traversing from left too right and if locked[i] == 0, treating both (and ) as open++
  for (let i = 0; i < n; i++) {
    if (locked[i] === "0" || s[i] === "(") {
      open++;
    } else {
      close++;
    }

    if (close > open) return false;
  }

  //step2 : repeating step1 just from right to left because there might be a case of (( with locked[0] being "1" and so open === close
  close = 0;
  open = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (locked[i] === "0" || s[i] == ")") {
      open++;
    } else {
      close++;
    }

    if (close > open) return false;
  }

  return true;
};
