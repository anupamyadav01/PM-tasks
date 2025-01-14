// Using the `reduce` method, calculate and print the sum of elements in an array.

const numsArr = [1, 2, 3, 4, 5, 6];

let ans = numsArr.reduce((perv, curr) => {
  return perv + curr;
}, 0);

console.log(ans);
