const countUnique = (array1) => {
  let left = 0;
  let right = 1;
  let count = 1;
  while (right < array1.length) {
    if (array1[left] === array1[right]) {
      //shift right
      right++;
    } else {
      count++;
      //shift both right and left
      left = right;
      right++;
    }
  }
  return count;
};

console.log(countUnique([1, 1, 1, 2])); //1,2-2
console.log(countUnique([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5])); //1,2,3,4,5-5
