Write a function that takes a string of text (containing ONLY lowercase letters) and returns an object containing the count for each letter in the string.

frequencyAnalysis('abca');
// => {a: 2, b: 1, c: 1}
// Bonus: Write a second function normalizedFrequency that uses your first function but returns the normalized frequency of each letter.
// Bonus:
normalizedFrequency('abca');
// => {a: 0.5, b: 0.25, c: 0.25}

frequencyAnalysis('abca');

function frequencyAnalysis(str){
  var obj = {}
  for(var i=0; i<str.length;i++){
    if(obj[str[i]]) obj[str[i]]++
    else obj[str[i]]=1;
  }
  return obj
}
function normalizedFrequency(str){
  var obj1 =frequencyAnalysis(str)
  var newObj ={}
  for(var i=0;i<str.length;i++){
    if(!newObj[str[i]]) {
    newObj[str[i]]= obj1[str[i]] / str.length
    console.log(obj1)
  }
  }
  return newObj
};
normalizedFrequency('abca');
