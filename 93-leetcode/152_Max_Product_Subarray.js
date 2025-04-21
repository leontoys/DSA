/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max_product = nums[0];
  let prev_product = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (i !== 0) {
      prev_product = Math.sign(prev_product * nums[i]);
    }
    if (nums[i] === 0) {
    }
    console.log("previous", prev_product);
    max_product = prev_product > max_product ? prev_product : max_product;
    console.log("max", max_product);
  }
  return max_product === 0 ? 0 : max_product;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([0, 2]));
