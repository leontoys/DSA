/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let output = new Array(nums.length);
  let prefix = 1;
  //from left to right
  for (let i = 0; i < nums.length; i++) {
    output[i] = prefix;
    prefix = prefix * nums[i];
  }
  //now from right to left
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i] * postfix;
    postfix = postfix * nums[i];
  }
  return output;
};
