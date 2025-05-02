/**
 * @param {string} s
 * @return {boolean}
 */
const isAlphaNumeric = (c) => {
  if (
    (c >= "a" && c <= "z") ||
    (c >= "A" && c <= "Z") ||
    (c >= "0" && c <= "9")
  ) {
    return true;
  } else {
    return false;
  }
};

var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left++;
      continue;
    }
    if (!isAlphaNumeric(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
