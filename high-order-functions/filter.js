// Implement the filter function.
function myFilter(arr, func) {
  var filteredArr = [];
  for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
  return filteredArr;
}
var arr = [1, 2, 3, 4, 5, 6];
function isEven(num) {
  return num % 2 === 0;
}
var filtered = myFilter(arr, isEven);
console.log(filtered);   // [2, 4, 6]
console.log(arr);     // [1, 2, 3, 4, 5, 6]
// If i already have an array but i only want to have items in the array that match certain criteria, use the filter.
// 1.The current item of the array
// 2.The current index of the current item
// 3.The entire array
// Let’s say that we want array of only the animals which are small. Using a for-loop we would write something like this:
let small_animals = [];
for (let i = 0; i < animals.length; i ++) {
    if (animals[i].size === "small") {
        small_animals.push(animals[i])
    }
}
// Using the filter-operator we can write the same like this:
let small_animals = animals.filter((animal) => {
  return animal.size === "small"
})
// The filter operator accepts the same parameters (current item, index and entire array) in the callback function. But since we don’t use the index and the entire array, i’ve left them out.
