// indexOf - Implement the indexOf function for arrays.
function myIndexOf(arr, item){
  for (var i=0; i<arr.length;i++){
    if (arr[i] === item) return i;
  }
  return -1;
}
myIndexOf([1,2,3,5], 5);
