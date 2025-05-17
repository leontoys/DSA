/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  let skip = 0;
  while (left < right) {
    if (s[left] !== s[right]) {
      //remove left and reverse
      let removeLeft = s.slice(left + 1, right + 1);
      let removeRight = s.slice(left, right);
      return (
        removeLeft === removeLeft.split("").reverse().join("") ||
        removeRight === removeRight.split("").reverse().join("")
      );
    }
    left++;
    right--;
  }
  return true;
};
