// Write a function, veryOdd. The function accepts an array of numbers, allTheNums. It should return a new array that contains only the odd numbers from allTheNums. veryOdd must not mutate allTheNums.

function veryOdd (nums) {
var oddNums=[];

for (var i = 0; i < nums.length; i++) {
  if (nums[i] % 2) oddNums.push(nums[i]);
 // console.log(nums[i]%2) will return 0 and 1
  }
  return oddNums;
}
var allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
var oddNums = veryOdd(allTheNums);
console.log('oddNums:', oddNums); // [1, 3, 5, 7];
