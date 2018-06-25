
// step-1: you compare the first item with the second. If the first item is bigger than the second item. you swap them so that the bigger one stays in the second position.

// step-2:And then compare second with third item. if second item is bigger than the third, we swap them. otherwise, they stayed in their position. Hence, the biggest among first three is in the third position.

// step-3:we keep doing it. until we hit the last element of the array. In that way we bubble up the biggest item of the array to the right most position of the array.

// step-4: Look at the inner loop in the code below.

// step-5: We repeat this process, starting from the last item of the array. look at the outer loop in the code below. We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.

// step-6: and then we move backward inside the outer loop.
function bubbleSort(arr){
  for (var i = arr.length - 1; i >= 0; i--){
    for (var j = 1; j <= i; j++){
      if (arr[j - 1] > arr[j]){
          var temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
       }
    }
  }
  return arr;
}
bubbleSort([7, 5, 2, 4, 3, 9]); //[2, 3, 4, 5, 7, 9]
bubbleSort([9, 7, 5, 4, 3, 1]); //[1, 3, 4, 5, 7, 9]

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
bubbleSort(array);
// swap function helper
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function bubbleSort (arr){
  var isSorted = false;
  var lastUnsorted = arr.length - 1;
  while (!isSorted){
    isSorted = true;
    for (var i = 0; i < lastUnsorted;i++){
      if (arr[i] > arr[i + 1]){
        swap(arr, i, i + 1);
        isSorted = false;
        lastUnsorted;
    }
    lastUnsorted--;
  }
 console.log(lastUnsorted);
}
}
