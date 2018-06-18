
// We are given two strings, A and B.
// A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.
var rotateString = function(A, B) {
  var str = '';
  if (A.length != B.length) return false;
  str = A + A
  console.log(B, ' is b');
  console.log(str, 'is str');
  console.log(str.indexOf(B));

  return str.indexOf(B) !== -1;
};

rotateString('abcde', 'deabc');
// 'Blue Whale'.indexOf('Blue');     // returns  0
//'Blue Whale'.indexOf('Blute');    // returns -1
// console.log('The index of "new" from the beginning is ' + anyString.indexOf('new'));
// logs 6
