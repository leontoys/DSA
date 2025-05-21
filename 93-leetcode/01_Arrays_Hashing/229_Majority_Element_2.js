/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let hashMap = new Map();
  let threshold = Math.floor(nums.length / 3);
  let result = [];
  for (const num of nums) {
    hashMap.set(num, (hashMap.get(num) || 0) + 1);
  }
  for (const [key, value] of hashMap) {
    if (value > threshold) result.push(key);
  }
  return result;
};
