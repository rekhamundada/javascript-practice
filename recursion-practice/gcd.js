//  In mathematics, the greatest common divisor (gcd) of two or more integers, when at least one of them is not zero, is the largest positive integer that divides the numbers without a remainder. For example, the GCD of 8 and 12 is 4.

function gcd(num1, num2){
  // if (num2 === 0) return num1;
  if (!num2) { return num1; }
  else {
    var remainder = num1 % num2;
    return gcd(num2, remainder );
  }
}
gcd(8, 12);

egcd(8, 12);    // => 4
function egcd(a, b) {
    if (a === 0) return b;
    while (b !== 0) {
        if (a > b) a = a - b;
        else b = b - a;
    }
    return a;
}
