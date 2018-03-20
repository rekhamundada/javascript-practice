function myMap(arr, func) {
  var mappedArr = [];
  for (var i=0; i<arr.length; i++) {
    mappedArr.push(func(arr[i], i));
  }
  return mappedArr;
}
function double(num) { return num*2 }
var arr = [1,2,3,4];
var doubledArr = myMap(arr, double);
console.log(doubledArr)    // [2,4,6,8]

// If i already have an array and i want to do the exact same operation on each of the elements in the array and return the same amount of items in the array, use the map.
// The map operator accepts three values in the callback function, namely:
// 1.The current item of the array
// 2.The current index of the current item
// 3.The entire array
let animal_names = [];
for (let i = 0; i < animals.length; i++) {
    animal_names.push(animals[i].name);
}
or
let animal_names = animals.map((animal, index, animals) => {
  return animal.name
})
const animals = [
  {
      "name": "cat",
      "size": "small",
      "weight": 5
  },
  {
      "name": "dog",
      "size": "small",
      "weight": 10
  },
  {
      "name": "lion",
      "size": "medium",
      "weight": 150
  },
  {
      "name": "elephant",
      "size": "big",
      "weight": 5000
  }
]
