//move all elements to last

function moveLast(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  //till they meet and don't cross over
  while (left < right) {
    //keep moving right to find target
    if (arr[left] !== target) {
      left++;
    }
    //keep moving left to find something to swap
    if (arr[right] === target) {
      right--;
    }
    //swap
    if (arr[left] === target && arr[right] !== target) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      //then move the pointers
      left++;
      right--;
    }
  }
  return arr;
}

console.log(moveLast([6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6], 6));
