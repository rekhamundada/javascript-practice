function recursiveStringPermutations(str) {
  var results = [ ];
  getPerms(str, [ ]);
  function getPerms(str, arr) {
      if (typeof str === 'string') str = str.split('');
      if (!str.length)  results.push(arr.join(''));
          //base case- push the compiled results into the results variable
      for (var i = 0; i < str.length; i++) {
          var letter = str.splice(i, 1);
          arr.push(letter);
          console.log(arr);
          getPerms(str, arr); //recursive call
          arr.pop();
          str.splice(i, 0, letter);
      }
  }
  return results.filter(function(el, index) {
      return results.indexOf(el) === index; //filter out non-unique words
  }).sort();
}

recursiveStringPermutations('one');
stringPermutations('one');
function stringPermutations (str) {
  var results = [ ];
  var letters = str.split('');
  results.push([letters.shift()]); //add first letter (as an array) to results
  while (letters.length) {
    var curLetter = letters.shift();
    var tmpResults = [ ];
    results.forEach((curResult) => {
      for (var i = 0; i <= curResult.length; i++) {
        var tmp = curResult.slice();
        //make copy so we can modify it
        //insert the letter at the current position
        tmp.splice(i, 0, curLetter);
        tmpResults.push(tmp);
      }
    });
    results = tmpResults; //overwrite the previous results
  }
  return results
    .map(function (letterArr) {
      return letterArr.join('');
    })
    .filter(function (el, index, self) {
      return self.indexOf(el) === index;
       //filter out non-unique words
    })
    .sort();
}
