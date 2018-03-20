// check valid anagram
var isAnagram = function(s, t) {
  var str1= s.split('').sort().join('')

  var str2= t.split('').sort().join('')
  if(str1=== str2) return true
  else return false
};

