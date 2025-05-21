/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let prefixMap = new Map();
  let currentSum = 0;
  let count = 0;
  prefixMap.set(0, 1);
  for (const num of nums) {
    currentSum += num;
    let difference = currentSum - k;
    count += prefixMap.get(difference) || 0;
    prefixMap.set(currentSum, (prefixMap.get(currentSum) || 0) + 1);
  }
  return count;
};
