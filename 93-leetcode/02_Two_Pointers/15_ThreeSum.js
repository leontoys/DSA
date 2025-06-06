/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[left] === nums[left - 1] && left - 1 > i) {
        left++;
        continue;
      }

      let sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right--;
        continue;
      } else if (sum < 0) {
        left++;
        continue;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
      }
    }
  }

  return result;
};
