// Implement the reduce function.
// reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10

function myReduce (arr, func, start) {
  var total  = start;
  for (var i = 0; i < arr.length; i++) {
    total = func(total, arr[i], i);
    console.log(total, 'isprev')
    console.log(arr[i], 'is array')
  }
  return total;
}
var arr = [1,2,3,4,5];

var sum = myReduce(arr, function(a, b) {
  return a + b;
}, 0);
console.log(sum);  // 15
// If i already have an array, but i want to use the values in that array to create something completely new, use the reduce.
// Let’s say that we want to calculate the combined weight of all the animals in our array. Using a for-loop we can write something like this:
let total_weight = 0;
for (let i = 0; i < animals.length; i++) {
    total_weigth += animals[i].weight
}
let total_weight = animals.reduce((weight, animal, index, animals) => {
  return weight += animal.weight
}, 0)
// The first parameter is the current value of the end value. We have to set the initial value at the end of the function. In this case we set it to 0. This could be any value though.
// The second parameter is the current item in the array.
// The third is the index again.
// The last is the full array.
