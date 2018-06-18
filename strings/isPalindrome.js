
isPalindrome('Racecar');
function fastestIsPalindrome(str) {
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++) {
    if (str[i] !== str[str.length - i - 1]) { return false; }
    }
  return true;
}

function isPalindrome(string) {
  string = string.toLowerCase();
  if(string.length <= 1) {
    return true;
  }
  if(string.charAt(0) != string.charAt(string.length - 1)) {
    return false;
  }
  return isPalindrome( string.substr(1, string.length - 2) );
}


function checkPalindrom(str) {
  return str == str.split('').reverse().join('');
}
function isPalindrome (str){
  if (str === null) return false;
  str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }
  return true;
}

function isPalindrome(letters) {
      var characters  = letters.split(''),
          firstLetter = characters.shift(),
          lastLetter  = characters.pop();
      if (firstLetter !== lastLetter) return false;
      if (characters.length < 2) return true;
      return isPalindrome(characters.join(''));
  }
// [^A-Z] matches anything that is not enclosed between A and Z
// [^a-z] matches anything that is not enclosed between a and z
// [^0-9] matches anything that is not enclosed between 0 and 9
// [^_] matches anything that does not enclose _
// /[^A-Za-z0–9]/g  or
// /[\W_]/g
// \W removes all non-alphanumeric characters:

// \W matches any non-word character
// \W is equivalent to [^A-Za-z0–9_]
// \W matches anything that is not enclosed in the brackets

