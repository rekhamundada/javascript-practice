function countVowels(str) {
  if (str.length <= 0){
    return 0;
  }
  if (isVowel(str[0]) === true){
    return 1 +  countVowels(str.slice(1));
  }
  return countVowels(str.slice(1));
}

function isVowel(char){
  var vowels = 'AEIOUaeiou';
  return vowels.indexOf(char) > -1;
}
countVowels('Four score and seven years');    // => 9
