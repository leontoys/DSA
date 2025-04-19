/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max_sum = nums[0]; //first element
  let previous_sum = 0; //till now

  for (let i = 0; i < nums.length; i++) {
    //if the previous sum until now is negative
    //then we can ignore it because it won't add
    //anything to increase the sum
    if (previous_sum < 0) {
      previous_sum = 0;
    }
    //add this number to previous sum
    previous_sum += nums[i];
    //compare this with maximum
    if (previous_sum > max_sum) {
      max_sum = previous_sum;
    }
  }

  return max_sum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
