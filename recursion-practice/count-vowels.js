function countVowels(str) {
  if (str.length <= 0){
    return 0;
  }
  if (isVowel(str[0]) === true){
    return 1 +  countVowels(str.slice(1));
  }
  return countVowels(str.slice(1));
}
function countVowels1(str) {
  if (str.length <= 0) {
    return 0;
  }
  // recursive case: the 'true' or 'false' value when added will convert to 1 or 0
  return isVowel(str[0]) + countVowels(str.slice(1))
}
function isVowel(char){
  var vowels = 'AEIOUaeiou';
  return vowels.indexOf(char) > -1;
}
countVowels('Four score and seven years');    // => 9
