

function repeat(str, count){
  var newStr = '';
  for (var i = 0;i < count;i++){
    newStr += str;
    console.log(newStr, i);
  }
  return newStr;
}
repeat('yo', 4); // OUTPUT: 'yoyoyoyo'
// yo 0
// yoyo 1
// yoyoyo 2
// yoyoyoyo 3
// => 'yoyoyoyo'
