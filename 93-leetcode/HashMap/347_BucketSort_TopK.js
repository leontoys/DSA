/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let hashMap = {};
  let count = Array.from({ length: nums.length }, () => []);
  for (const num of nums) {
    hashMap[num] = (hashMap[num] || 0) + 1;
  }
  for (const [key, value] of Object.entries(hashMap)) {
    count[value].push(parseInt(key));
  }
  let result = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    for (const key of count[i]) {
      if (result.length === k) break;
      result.push(key);
    }
  }
  return result;
};

let arr = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4];
console.log(topKFrequent(arr, 2));
