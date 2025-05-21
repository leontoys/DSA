/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; //to avoid duplicates
    for (let j = i + 1; j < length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; //avoid
      let left = j + 1;
      let right = length - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        } else if (sum > target) right--;
        else left++;
      }
    }
  }

  return result;
};
