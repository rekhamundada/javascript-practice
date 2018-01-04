//Write a function that accepts a string and returns the word from that string with the most vowels.

function mostVowels(str){
  var vowels = 'aeiouAEIOU';
  var wordsArr = str.split(" ");
  var mostVowels = 0;
  var leadWord = '';

  for(var i =0; i< wordsArr.length; i++){
    var word = wordsArr[i]
    var vowelCount = 0;
     for(var j=0; j<word.length; j++){
      if(vowels.indexOf(word[j]) !== -1){
        vowelCount +=1;
      }
    }
    if(vowelCount > mostVowels){
      mostVowels = vowelCount;
      leadWord = word
    }
  }
  return leadWord
}

mostVowels("I am a keeper with some real rhythms");
//Write a function that accepts two strings. The function should search through the first string, and return the word with the most instances of the second string.


var shakespeareQuote = "To climb steep hills requires slow pace at first"
findMost(shakespeareQuote, "re");

function findMost(str, searchTerm){
  var wordsArr = str.split(" ");console.log(wordsArr)
  var maxCount =0;
  var result = '';
  for(var i=0; i< wordsArr.length;i++){
    var word = wordsArr[i];
    var currentCount =0;
    for(var j=0; j< word.length; j++){
      var substr = word.substring(j,j+searchTerm.length)
      if(substr === searchTerm) {
        currentCount++
      }
    }
    if(currentCount > maxCount){
      maxCount = currentCount
      result = word
    }
  }
  return result
}
