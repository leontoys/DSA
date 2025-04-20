/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  //find degree of array using hash map?
  let hash_map = {};
  let degree = 0;

  for (let i = 0; i < nums.length; i++) {
    if (hash_map[nums[i]]) {
      hash_map[nums[i]]++;
    } else {
      hash_map[nums[i]] = 1;
    }
    //check if this is greater than degree
    if (hash_map[nums[i]] > degree) {
      degree = hash_map[nums[i]];
    }
  }
  
    let hash_map2 = {};
    let degree2 = 0;
  //find current running degree
  for (let i = 0; i < nums.length; i++) {
    if (hash_map2[nums[i]]) {
      hash_map2[nums[i]]++;
    } else {
      hash_map2[nums[i]] = 1;
    }
    //check if this is greater than degree
    if (hash_map2[nums[i]] === degree) {
      //then we reached
    }
  }  
    

  //first return degree and see if that checks out
  return degree;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1])); //2
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])); //6
//console.log(findShortestSubArray());
