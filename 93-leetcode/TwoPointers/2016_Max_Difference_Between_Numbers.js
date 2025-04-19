/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let i = 0;
  let j = 1;
  let difference = -1;

  while (j < nums.length) {
    if (nums[i] < nums[j]) {
      difference =
        nums[j] - nums[i] > difference ? nums[j] - nums[i] : difference;
    } else {
      i = j;
    }
    j++;
  }

  return difference;
};

console.log(maximumDifference([7, 1, 5, 4]));
console.log(maximumDifference([9, 4, 3, 2]));
console.log(maximumDifference([1, 5, 2, 10]));
