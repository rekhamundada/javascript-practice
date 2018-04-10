// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.
// Input: 5
// Output: True
// Explanation:
// The binary representation of 5 is: 101

var hasAlternatingBits = function(n) {
  var str = (n).toString(2);
  var count = 0;
  for (var i = 0; i < str.length - 1; i++) {
  if (str.charAt(i) === str.charAt(i + 1)) count++;
  }
      if (count === 0) return true;
      else return false;
};

hasAlternatingBits(5);
var hasAlternatingBits1 = function(n) {
  var str = (n).toString(2);
  console.log(str, 'str is');
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i), 'is i');
    console.log(str.charAt(i+1), 'is i+1');
  if (str.charAt(i) === str.charAt(i + 1)) count++;
   if (str[i] === str[i + 1]) count++;
  }
  console.log(count, 'count is ');
      if (count === 0) return true;
      else return false;
};
hasAlternatingBits1(7);

