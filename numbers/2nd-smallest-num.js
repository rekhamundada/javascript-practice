// the fastest way is to iterate all the elements just like you can do to find minimum. But up to your needs there will be two variables used: first minimum (candidate) and second one.
// This logic is O(N) while sorting approach is O(N lg(N)).
// Infinity is a numeric value that represents positive infinity

function secondSmallest(arr){
  var fisrtMin = Infinity;
  var secondMin = Infinity;
  for(var i=0; i<arr.length;i++){
    if(arr[i] < fisrtMin){
      secondMin = fisrtMin
      fisrtMin = arr[i]
    } else if(arr[i] < secondMin ){
       secondMin = arr[i]
    }
  }
  return secondMin;
}
 var arr =[ 9, 7, 5, 3, 8, 6, 4, 2,12 ]
 secondSmallest(arr)
