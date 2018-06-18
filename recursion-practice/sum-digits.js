function sumDigits(num) {
  let numString = num.toString();
  let total = 0;
  // base case: when we have only one digit left
  if (numString.length === 1) {
      total += parseInt(numString);
  } else {
      // recursive case: add first digit at 0 element
      // then sum digits of sliced string from 1st element to end and convert back to number
      total += parseInt(numString[0]) + sumDigits(parseInt(numString.slice(1)));
  }
  return total;
}
sumDigits(1234); // 10
function sumOfDigits(num){
  var num = num.toString();
  var sum = 0;
   for (var i = 0; i < num.length; i++){
     console.log(num[i], ' is num[i]');
     sum += parseInt(num[i]);
   }
   return sum;
 }
 sumOfDigits(414); // OUTPUT: 9
// without Recursion
// The parseInt() function parses a string and returns an integer.
function sumDigits1(num) {
  var total = 0;
  var newString = num.toString().split('');
  console.log(newString, 'is the String')
  // [ '1', '1', '4', '8' ] 'is the String'
  for (var i = 0; i < newString.length; i++) {
    var converted = parseInt(newString[i]);
    total += converted;
  }
  return total;
}

sumDigits1(1148);
