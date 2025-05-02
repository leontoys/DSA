/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sCount = {};
  let tCount = {};
  for (let i = 0; i < s.length; i++) {
    sCount[s[i]] = sCount[s[i]] ? sCount[s[i]] + 1 : 1;
    tCount[t[i]] = tCount[t[i]] ? tCount[t[i]] + 1 : 1;
  }
  for (let key of Object.keys(sCount)) {
    if (sCount[key] !== tCount[key]) return false;
  }
  return true;
};
