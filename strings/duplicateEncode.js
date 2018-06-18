function duplicateEncode(word){
  var obj ={}
  word.toLowerCase().split('').forEach((letter) => {
    if(obj.hasOwnProperty(letter)) {
      obj[letter]++
      console.log(obj[letter])
    } else {
       obj[letter] = 1;
    }
  })
  word =  word.toLowerCase().split('').map((letter) => {
    if( obj[letter] > 1) return ')'
    else return '('
  }).join('')
  return word
}
duplicateEncode("din") //"((("
duplicateEncode("recede")//"()()()"
