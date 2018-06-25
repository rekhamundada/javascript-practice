
// The Fibonacci Sequence is the series of numbers:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// The next number is found by adding up the two numbers before it.
// The 2 is found by adding the two numbers before it (1+1)
// The 3 is found by adding the two numbers before it (1+2),
// And the 5 is (2+3),
// and so on!
// returns the fibonacci number on index n
var fib = function(n){
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
fib(17);

function fibonacci (num){
  var a = 1, b = 0, temp;
  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}
function fibonacci(n){
  var fibo = [0, 1];
  if (n <= 2) return 1;
  for (var i = 2; i <=n; i++ ){
   fibo[i] = fibo[i-1]+fibo[i-2];
  }
 return fibo[n];
}

fibonacci(12);
  // 144
