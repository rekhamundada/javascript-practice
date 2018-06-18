// Performs the XOR operation on each pair of bits. a XOR b yields 1 if a and b are different. The truth table for the XOR operation is:
// ^ (Bitwise XOR)
// a	  b	  a XOR b
// 0	  0	    0
// 0	  1     1
// 1	  0	    1
// 1	  1   	0
// Operator: x ^= y
// Meaning:  x  = x ^ y
var singleNumber = function(nums) {
   var result = 0;
   for (var i = 0; i < nums.length;i++){
      result ^= nums[i];
      //console.log(result, 'rrrrr')
   }
   return result;
};
singleNumber([1, 2, 2]); // returns 1
