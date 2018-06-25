function secondLargestNumber(arr){
  var fisrtLargest = 0;
  var second = 0;
  for (var i = 0; i < arr.length;i++){
    if (arr[i] > fisrtLargest){
      second = fisrtLargest;
      fisrtLargest = arr[i];
    } else if (arr[i] > secondLargest ){
       second = arr[i];
    }
  }
  return second;
}
secondLargestNumber([ 9, 7, 5, 3, 8, 6, 4, 2,12 ]);

function secondLargest(arr){
  var fisrtLargest = 0;
  var secondLargest = 0;
  for (var i = 0; i < arr.length;i++){
    if (arr[i] > fisrtLargest){
      secondLargest = fisrtLargest;
      fisrtLargest = arr[i];
      console.log(fisrtLargest, 'After');
      console.log(secondLargest, '2nd now ....');
      console.log(arr[i], ' is arr i');
    } else if (arr[i] > secondLargest && arr[i] != fisrtLargest){
      console.log(arr[i], 'is arr i in else loop');
      console.log(secondLargest, '2nd in else loop');
      console.log(fisrtLargest, '1st in else loop');
       secondLargest = arr[i];
       console.log(secondLargest, '2nd in loop at the end');
    }
  }
  return secondLargest;
}
 var arr = [ 9, 7, 5, 3, 8, 6, 4, 2, 12 ];
 secondLargest(arr);
//  9 'After'
//  0 '2nd now ....'
//  9 ' is arr i'
//  7 'is arr i in else loop'
//  0 '2nd in else loop'
//  9 '1st in else loop'
//  7 '2nd in loop at the end'
//  8 'is arr i in else loop'
//  7 '2nd in else loop'
//  9 '1st in else loop'
//  8 '2nd in loop at the end'
//  12 'After'
//  9 '2nd now ....'
//  12 ' is arr i'
//  => 9
