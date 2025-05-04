var longestConsecutive = function (nums) {
  let hashSet = new Set(nums);
  let maxLength = 0;
  for (const num of nums) {
    //check if this number is start of a sequence
    //this will be start of a sequence , only if its previous number is not there
    if (hashSet.has(num - 1)) continue;
    //so now we know this is the start
    let length = 0;
    while (hashSet.has(num + length)) {
      length++;
    }
    maxLength = Math.max(length, maxLength);
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
