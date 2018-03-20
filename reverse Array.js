// Write a function reverseArray that reverses the elements of an array and returns the reversed array.

reverseArray([1, 2, 3, 4])    // => [4,3,2,1]

function reverseArray(arr){
  var newArr = [];
  for (var i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}
// reverse words in a string
var reverseWords = function(s) {
  return s.split(" ")
     .map(function (word) {
       return word.split("").reverse().join("")
     })
    .join(" ");
};
// with Recursion
function reverseArray(arr) {
  let newArr = [];
  // base case - if no more array to reverse return newArr
  if(!arr.length) {
      return newArr;
  } else {
      // return array concatenated with the remainder of the array reversed
      // and with the first element last
      // we need return here since concat does not alter newArr itself
      return newArr.concat(reverseArray(arr.slice(1)), arr[0]);
  }
}
