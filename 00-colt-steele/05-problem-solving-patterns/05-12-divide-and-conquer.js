/**find a value in a sorted array */
const binarySearch = (arr, k) => {
  //so we have to first find the middle
  let min = 0;
  let max = arr.length;

  //do this as long as min and max don't cross over
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    //is this same as the
    if (arr[middle] === k) {
      return middle; //return index
    } else if (arr[middle] < k) {
      //so we have to look right of this
      min = middle + 1;
    } else {
      //we have to look left of this
      max = middle - 1;
    }
  }
  //if not found
  return -1;
};

console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19], 13)
);
console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19], 12)
);
