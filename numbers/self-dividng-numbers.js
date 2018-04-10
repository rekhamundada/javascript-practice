var selfDividingNumbers = function(left, right) {
  var newArr = [];
  for (var i = left; i <= right;i++){
      if (isDividing(i)){
        newArr.push(i);
      }
  }
  return newArr;
};

function isDividing(num) {
var digit = num.toString()
for (var i = 0;i < digit.length;i++){
  if (digit[i] === 0) return false;
  else if (num % digit[i] !== 0) return false;
}
return true;
}
var left = 1;
var right = 22;
selfDividingNumbers(left, right);
