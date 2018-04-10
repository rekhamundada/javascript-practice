
// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

// Input: 5 Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
var findComplement = function(num) {
  num = num.toString(2);
  var newNUm = '';
  console.log(num, ' num is')
  for (var i = 0;i < num.length;i++){
    console.log(num[i]);
    newNUm += (num[i] == 1 ? 0 : 1);
    console.log(newNUm, 'is the newNUm');
  }
    return parseInt(newNUm, 2);
};

findComplement(5);

// If it matches true, execute the code after the ?

// If it matches false, execute the code after the :

