// The Array.find() method returns the value of the first element in an array that passes a given test
let arr = ['a','b','c'];
arr.find(k => k=='b');
// 'b'
arr.findIndex(k => k=='b');
// 1
// we are testing each entry in the array to see if it equals ‘b’. If it does, the value of that entry is returned. Since ‘b’ == ‘b’, ‘b’ is returned.
function include(arr, obj) {
  for(var i=0; i<arr.length; i++) {
      if (arr[i] == obj) return true;
  }
}
include([1,2,3,4], 3); // true
include([1,2,3,4], 6); // undefined
