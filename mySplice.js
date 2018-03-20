// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

function mySplice (arr, start, deleteCount) {
  var deletedArr = [];
  var startElements = [];

  //Remove members up to start
  for (var i=0; i<start; i++) {
    startElements.push(arr.shift());
  }

  //Remove deleted elements
  for (var j=0; j<deleteCount; j++) {
    deletedArr.push(arr.shift());
  }

  //Add start elements back into the original array
  var startElementsLength = startElements.length;
  for (var z=0; z<startElementsLength; z++) {
    arr.unshift(startElements.pop());
  }

  return deletedArr;
}
var myArray = [1,2,3];
console.log("returned elements: ", mySplice(myArray, 1, 1))    // [2]
console.log(myArray)    // [1,3]
