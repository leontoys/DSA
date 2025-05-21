/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let hashMap = {};
  for (const num of nums) {
    hashMap[num] = (hashMap[num] || 0) + 1;
  }
  let sorted = Object.entries(hashMap).sort(([, a], [, b]) => b - a);
  let count = 0;
  let result = [];
  for (const element of sorted) {
    if (count === k) break;
    result.push(parseInt(element[0]));
    count++;
  }
  return result;
};

let arr = [1, 1, 1, 2, 2, 3, 3, 3, 3];
console.log(topKFrequent(arr, 2));
