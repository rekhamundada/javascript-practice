
// Method 2
// The second method takes valid ints (positive or negative) and returns a list of the values that follow the above rules.
// The first value may be greater than or less than the second and the list should increment/decrement appropriately
// For example an input of 10,13 should generate a response of ['FIVE', 11, 'THREE', 13].

function getNumber(number){
  if (number % 3 === 0 && number % 5 === 0) return 'BOTH';
  else if (number % 3 === 0) return 'THREE';
  else if (number % 5 === 0) return 'FIVE';
  else return number;
}
getNumber(5);

function getNumberRange (first, last){
  var list = [];
  if (first < last) {
      for (var i = first; i <= last; i++) {
          list.push(getNumber(i));
      }
  } else if (first > last) {
      for (var i = first; i >= last; i--) {
          list.push(getNumber(i));
      }
  }
  return list;
}
getNumberRange(10, 15);
