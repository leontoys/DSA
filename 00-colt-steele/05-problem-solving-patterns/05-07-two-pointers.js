//find pair of numbers that add up to zero
//in sorted array
const sumZero = (array1) => {
  let left = 0;
  let right = array1.length - 1;
  //now we have to loop
  //as long as left and right don't cross over
  while (left < right) {
    let sum = array1[left] + array1[right];
    console.log(array1[left], array1[right], sum);
    if (sum === 0) {
      return [array1[left], array1[right]];
    }
    //otherwise
    else if (sum > 0) {
      console.log("reducing right");
      //if we add up and if the number is positive
      //it means the number on the right side higher
      //-4+5 = 1 , then we need to shift the right one leftwards
      right--;
    }
    //if sum is less than 0
    else {
      console.log("increasing left");
      //say -3+2 = -1, so to make it zero
      //we need -2 which is on the right side of left pointer
      left++;
    }
  }
};

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
