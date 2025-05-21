var longestConsecutive = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let maxLength = 0;
  let left = 0;
  let right = 0;
  let repeat = 0;
  while (right <= nums.length) {
    right++;
    if (nums[right] === nums[right - 1] + 1) continue;
    if (nums[right] === nums[right - 1]) {
      repeat++;
      continue;
    }
    let length = right - left - repeat;
    maxLength = Math.max(maxLength, length);
    left = right;
    repeat = 0;
  }
  return maxLength;
};

let arr = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(arr));
arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(arr));
arr = [1, 0, 1, 2];
console.log(longestConsecutive(arr));
arr = [4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3];
console.log(longestConsecutive(arr));
