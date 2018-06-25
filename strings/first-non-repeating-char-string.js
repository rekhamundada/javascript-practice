
//The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
// The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
firstNonRepeatChar('the quick brown fox jumps then quickly blow air');
function firstNonRepeatChar(str){
  var obj = {};
  for (var i = 0; i < str.length; i++){
    if (obj[str[i]]) obj[str[i]]++;
    else obj[str[i]] = 1;
  }
  for (var key in obj){
    console.log(obj[key]);
    if (obj[key] === 1) return key;
  }
}

function nonRepeatingChar(str){
    for (var i = 0;i < str.length;i++){
      var char = str[i];
      if (str.indexOf(char) === str.lastIndexOf(char)){
        console.log(str.indexOf(char), 'in loop');
        console.log(str.lastIndexOf(char), 'last loop');
        return char;
      }
    }
  }
  nonRepeatingChar('aaabbbc');
  function firstNonRepeatingChar(str){
    str = str.split('');
    console.log(str);
    var result = '';
    for (var i = 0; i < str.length;i++){
      var count = 0;
      for (var k = 0;k < str.length;k++){
        if (str[i] === str[k]) {
          count++;
          console.log(str[i], count);
        }
      }
      if (count < 2) {
        result = str[i];
        break;
      }
    }
    return result;
  }
  firstNonRepeatingChar('aaabbbcd');
