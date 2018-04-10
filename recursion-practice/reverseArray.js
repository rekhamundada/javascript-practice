function reverseArray(arr) {
  let newArr = [];
  // base case - if no more array to reverse return newArr
  if (!arr.length) {
      return newArr;
  } else {
      // return array concatenated with the remainder of the array reversed
      // and with the first element last
      // we need return here since concat does not alter newArr itself
      return newArr.concat(reverseArray(arr.slice(1)), arr[0]);
  }
}
var arr = [1, 2, 3, 4];
reverseArray(arr);
