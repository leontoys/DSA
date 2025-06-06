/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let rightSum = sum - leftSum - nums[i];
    if (leftSum == rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
