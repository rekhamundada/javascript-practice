function reverse (str) {
  if (str === "") {
      return "";
  } else {
      return reverse(str.substr(1)) + str.charAt(0);
  }
}
function reverseOne(str){
  var rtnStr = '';
  for (var i = str.length-1; i>=0;i--){
    rtnStr += str[i];
  }
  return rtnStr;
}
reverseOne('you are a nice dude');
  // "edud ecin a era uoy"

