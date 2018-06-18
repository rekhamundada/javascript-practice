
// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
function isSorted (arr) {
  for (var i = 0; i < arr.length ; ++i) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
isSorted([])                        // true
isSorted([-Infinity, -5, 0, 3, 9])  // true
isSorted([3, 9, -3, 10])            // false

function checkSortedness(data) {
  for (var i = 1; i < data.length; i++) {
      if (data[i - 1] > data[i]) return false;
  }
  return true;
}

checkSortedness([3, 9, 10]);
