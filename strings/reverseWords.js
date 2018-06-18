function reverseWords(str) {
  return str.split(' ')
        .map(function (word) {
          return word.split('').reverse().join('')
        })
       .join(' ');
}
reverseWords('we are genius');

function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString('we are winners');

// Reverse words in place
function wordsReverser(string){
  return string.split("").reverse().join("").split(" ").reverse().join(" ")
  }

  console.log(wordsReverser('New string, same results.'));
// weN ,gnirts emas .stluser

function wordsReverser1(string){
  var words = string.split(' ');
  var result = [];
  for (var i = 0; i < words.length; i++){
    console.log(words[i].split('').reverse().join(), 'are bbbb')
    result.push(words[i].split('').reverse().join(''));
  }
  return result.join(' ');
}
console.log(wordsReverser1('New string, same results'));
// w,e,N are bbbb
// ,,g,n,i,r,t,s are bbbb
// e,m,a,s are bbbb
// s,t,l,u,s,e,r are bbbb
// weN ,gnirts emas stluser
