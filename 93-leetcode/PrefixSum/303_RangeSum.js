/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.sum = new Array(this.nums.length);
  let prefixSum = 0;
  for (let i = 0; i < this.nums.length; i++) {
    this.sum[i] = prefixSum;
    prefixSum += nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.sum[right] + this.nums[right] - this.sum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
