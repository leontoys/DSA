    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    var countKDifference = function (nums, k) {
    let nums_hash = {};
    let pairs = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i] + k;
        let diff = nums[i] - k;
        //check if sum is there
        if (nums_hash[sum]) {
        pairs += nums_hash[sum];
        }
        if (nums_hash[diff]) {
            pairs += nums_hash[diff]
        }
        nums_hash[nums[i]] = ( nums_hash[nums[i]]  || 0 ) + 1;
        console.log(nums_hash)
    }
    return pairs;
    };

    console.log(countKDifference([1, 2, 2, 1],1));