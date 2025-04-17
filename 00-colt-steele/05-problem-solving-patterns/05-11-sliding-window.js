/**find the largest sum of n consecutive elements */
const maxSubArraySum = (arr, n) => {
  let maxSum = 0;
  //so first make the initial window of length n
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  console.log(maxSum); //this prints the sum of the first n numbers
  //then keep sliding the window
  //so we have to start the next loop at n+1th element
  let sum = maxSum;
  //remember - i points to right most number
  for (let i = n; i < arr.length; i++) {
    console.log("removing", arr[i - n]);
    console.log("adding", arr[i]);
    //drop the left element and add the right+1 element
    sum = sum - arr[i - n] + arr[i];
    //then check if this is sum is greater than what we have in the max
    //if yes make this the max
    console.log(maxSum, sum);
    maxSum = maxSum > sum ? maxSum : sum;
  }
  return maxSum;
};

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
