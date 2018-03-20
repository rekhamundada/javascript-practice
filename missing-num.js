// var missingNumber = function(nums) {
//   var newNum = 0;
// for (i=0; i<nums.length; i++) {
//   newNum = newNum ^ i ^ newNum[i];
// }
// return (newNum ^ i);
// }
var missingNumber = function(nums) {
var missing=0;
for (i=0; i<nums.length; i++) {
    missing ^= (i+1) ^nums[i];
}
return missing;
}
// bitwise operator
// XOR ^ example- 5 ^ 1 result 4
