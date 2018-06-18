// check valid anagram
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  var str1 = s.split('').sort().join('');
  var str2 = t.split('').sort().join('');

  if (str1 === str2) return true;
  else return false;
};
isAnagram('car', 'cat');

function anagram(string1, string2) {
  var sortedStrings = [string1, string2].map(function (string) {
    return string.split('').sort().join('');
  });
  return sortedStrings[0] === sortedStrings[1];
}

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  var str1Char = str1.split('').sort();
  var str2Char = str2.split('').sort();

  str1Char.forEach(function(element, index) {
    if (str2Char[index] !== element ) return false;
    else return true;
  });

}
// checkAnagram is not working properly
checkAnagram('hello', 'oolle');

function checkAnagram(str1,str2){
  if (str1.length !== str2.length) return false;
  for (var i=0;i<str1.length;i++){
    var count = 0;
    // if(count<=0) return false
    for (var k=0; k<str2.length;k++){
      if (str2[k].toLowerCase() === str1[i].toLowerCase()) {
        count++;
        break;
      }
    }
  }
  return true;
}
checkAnagram('hello', 'ohlley');
