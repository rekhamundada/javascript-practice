
// odd numbers on left side and even numbers on right side
function oddEven(arr){
  var oddArr =[]
  var evenArr = []
  for(var i =0; i<arr.length;i++){
    if(arr[i]%2 === 0) evenArr.push(arr[i])
    else oddArr.push(arr[i])
  }
  return oddArr.concat(evenArr)
}

oddEven([2,4,9,8,7,4])

function oddEven1(arr){
  var newArr =[]
  for(var i =0; i<arr.length;i++){
    if(arr[i]%2 === 1) newArr.unshift(arr[i])
    else newArr.push(arr[i])
  }
  return newArr
}
oddEven([2,4,9,8,7,4]);

function sortThisArray(arr) {
    var start = 0;
    var endIndex = arr.length - 1;
    while(start < endIndex) {
      if(arr[start] % 2 === 0 && arr[endIndex] % 2 === 1) {
        console.log(arr[start], start, 'even')
        console.log(arr[endIndex],endIndex, 'odd')
        var temp = arr[start];
        arr[start] = arr[endIndex];
        arr[endIndex] = temp;
      }
      if(arr[start] % 2 == 1) start++;
      else endIndex--
    }

    return arr;
  }
  sortThisArray([ 2, 4, 6, 8, 0, 1, 3, 5, 7, 9, 1]);
  // 2 0 'even'
  // 1 10 'odd'
  // 4 1 'even'
  // 9 9 'odd'
  // 6 2 'even'
  // 7 8 'odd'
  // 8 3 'even'
  // 5 7 'odd'
  // 0 4 'even'
  // 3 6 'odd'
  // => [ 1, 9, 7, 5, 3, 1, 0, 8, 6, 4, 2 ]
  var data = [5, 2, 7, 9, 2, 3, 8, 4];
  data.sort(function(a, b) {
    console.log(b%2, 'hhhh')
    console.log(a%2, 'lllllll')
    return b % 2 - a % 2
  });
  console.log(data);
  // [ 5, 7, 9, 3, 2, 2, 8, 4 ]
