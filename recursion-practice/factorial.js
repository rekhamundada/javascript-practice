// factorial - Returns a number that is the factorial of the given number.
function factorial(num) {
  if (num < 0) return -1;
  else if (num === 0) return 1;
  else {
    return num * factorial(num-1)
  }
}
factorial(5)
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
factorialize(5);

function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1)
    return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}
factorialize(5);
