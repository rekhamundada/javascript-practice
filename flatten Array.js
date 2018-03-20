//Write a function that accepts a two-dimensional array and returns a flattened one-dimensional copy of the array.

function flatten(arr){
  var newArr = [];
  for(var i=0; i< arr.length; i++){
    console.log(arr[i])
    if(Array.isArray(arr[i])){
      for(var j=0; j<arr[i].length; j++){
        newArr.push(arr[i][j])
      }
    }
    else {
      newArr.push(arr[i])
    }
  }
  return newArr
}
flatten([1,[2,3],4])    // => [1,2,3,4]
