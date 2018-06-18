// isPrime - Returns true or false, indicating whether the // given number is prime.
// A prime number is a whole number greater than 1 whose only factors are 1 and itself
// The first few prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29
function isPrime(num){
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

function isPrime2(num){
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    console.log(i, 'is i')
    if (num % i === 0) return false;
  }
  console.log(num);
  return true;
}

function isPrime1(num) {
  var prime = num != 1;
  for(var i=2; i<num; i++) {
      if(num % i == 0) {
          prime = false;
          break;
      }
  }
  return prime;
}
isPrime(0)                          // false
isPrime(1)                          // false
isPrime(17)                         // true
isPrime(10000000000000)             // false
