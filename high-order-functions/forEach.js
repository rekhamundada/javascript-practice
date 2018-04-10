var sum = 0;
function addToSum(num) {
  console.log(num);
    sum += num;
}
var arr = [1,2,3];

 function myForEach(arr, func) {
   for (var i = 0; i < arr.length; i++) {
     func(arr[i], i);
   }
}
myForEach(arr, addToSum);
console.log(sum); // 6

function logValue(v){ console.log(v) }
function iterate(arr, fn) {
  for(var i=0; i<arr.length; i++) {
    fn(arr[i]);
  }
}
iterate([1, 2, 3, 4, 5], logValue)

