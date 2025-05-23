/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let left = 0;
  let window = [];
  let s1Sorted = s1.split("").sort().join("");
  let k = s1Sorted.length;
  for (let right = 0; right < s2.length; right++) {
    window.push(s2[right]);
    if (right - left + 1 === k) {
      if (window.toSorted().join("") === s1Sorted) return true;
      window.shift();
      left++;
    }
  }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
