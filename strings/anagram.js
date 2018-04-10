// check valid anagram
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  var str1 = s.split('').sort().join('');
  var str2 = t.split('').sort().join('');

  if (str1 === str2) return true;
  else return false;
};
isAnagram('car', 'cat');


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

