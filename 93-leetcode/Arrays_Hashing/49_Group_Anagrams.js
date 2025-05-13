/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hashMap = {};
  let result = [];

  for (let i = 0; i < strs.length; i++) {
    let key = strs[i].split("").sort().join("");
    if (hashMap[key]) {
      hashMap[key].push(strs[i]);
    } else {
      hashMap[key] = [strs[i]];
    }
  }

  return Object.values(hashMap);
};
