var findDuplicates = function(nums) {
  var newArr =[];
  var counts = {};
for (var i=0; i<nums.length;i++){
  var item = nums[i]
  counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
  if (counts[item] === 2) newArr.push(item);
 // if(newArr.indexOf(item) === -1 && nums.indexOf(item, i+1) !== -1 )newArr.push(item)
}
 return newArr
};
findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);

var findDuplicates1 = function(arr) {
  var duplicates = [];
  var obj = {};
  for (var i = 0; i < arr.length;i++){
     console.log(obj[arr[i]], arr[i], 'before');
  if (!obj[arr[i]]) {
    obj[arr[i]] = {};
    console.log(obj, 'object')
    console.log(obj[arr[i]], arr[i], 'after');
  }
  else { duplicates.push(arr[i]); }
}
return duplicates;
};
findDuplicates1([4, 3, 2, 7, 8, 2, 3, 1]);
// undefined 4 'before'
// {} 4 'after'
// undefined 3 'before'
// {} 3 'after'
// undefined 2 'before'
// {} 2 'after'
// undefined 7 'before'
// {} 7 'after'
// undefined 8 'before'
// {} 8 'after'
// {} 2 'before'
// {} 3 'before'
// undefined 1 'before'
// {} 1 'after'
// => [ 2, 3 ]
