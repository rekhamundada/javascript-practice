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
