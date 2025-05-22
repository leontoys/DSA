/* /**
 * @param {string} s
 * @return {number}
 */
/* var lengthOfLongestSubstring = function (s) {
  let letters = [];
  let count = 0;
  s.split("").forEach((element) => {
    if (letters.includes(element)) {
      count = count > letters.length ? count : letters.length;
      letters = letters.slice(letters.indexOf(element)+1)
    }
    letters.push(element);
  });
  return count > letters.length ? count : letters.length;
}; */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let window = new Set()
  let left = 0
  let count = 0
  let maxCount = 0
  for(let right = 0; right < s.length; right++){
      while(window.has(s[right])){
          window.delete(s[left])
          left++
      }
      window.add(s[right])
      count = right - left + 1
      maxCount = Math.max(maxCount,count)
  }
  return maxCount
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("dvdf"))
 */