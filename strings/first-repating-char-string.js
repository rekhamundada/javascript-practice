function firstRepeatingLetter (str) {
    for (var i=0; i<str.length; i++) {
      var remaining = str.slice(i+1);
      console.log(remaining, 'is remaining str');
      console.log(remaining.indexOf(str[i]), str[i], ' is index of');
      console.log(str[i], i, ' is');
      if (remaining.indexOf(str[i]) !== -1) {
        return str[i];
      }
    }
    return '';
  }

  firstRepeatingLetter("Grace Shopper")
