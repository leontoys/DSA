/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let hashMap = new Map();
  let threshold = Math.floor(nums.length / 2);
  for (const num of nums) {
    hashMap[num] = (hashMap[num] || 0) + 1;
    if (hashMap[num] > threshold) return num;
  }
};
