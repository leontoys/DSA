/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let last = m + n - 1; //to get zeros index
  //loop while elements are there in both left and right
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[last] = nums1[m - 1];
      m--;
    } else {
      nums1[last] = nums2[n - 1];
      n--;
    }
    last--; //this zero pointer
  }
  //add remaining elements from num2 if any
  while (n > 0) {
    nums1[last] = nums2[n - 1];
    n--;
    last--;
  }
};
