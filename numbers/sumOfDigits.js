// The parseInt() function parses a string and returns an integer.
// The radix parameter is used to specify which numeral system to be used,

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

var value = 2568,
sum = value
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => {return a + b }, 0);

console.log(sum);
