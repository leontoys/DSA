var containsNearbyDuplicate = function (nums, k) {
  let window = new Set();
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (right - left > k) {
      window.delete(nums[left]);
      left++;
    }
    if (window.has(nums[right])) {
      return true;
    } else {
      window.add(nums[right]);
    }
  }
  return false;
};

let nums = [1, 2, 3, 1];
let k = 3;
console.log(containsNearbyDuplicate(nums, k));
