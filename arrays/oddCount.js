function oddInt(array) {
  // Set the variables. The count and the element, that is going to be the output
  var count = 0;
  var element = 0;

  // Start looking the array
  for (var i = 0; i < array.length; i++) {
      // Get the number to look for and restart the tempCount variable
      var tempInt = array[i];
      var tempCount = 0;
      console.log('');
      console.log(' * Looking for number', tempInt);
      // Start looking the array again for the number to look for
      for (var j = 0; j < array.length; j++) {
          // If the current number is the same as the one that we are looking for, sum it up
          console.log('Current number at position', j, 'is', array[j]);
          if (array[j] === tempInt) {
              tempCount++;
              console.log('Number found. Current count is', tempCount);
          }
      }
      // After getting all the numbers, then we check the count
      if (tempCount % 2 !== 0 && tempCount > count) {
          console.log('Odd count found:', tempCount);
          count = tempCount;
          element = tempInt;
      }
  }
  return element;
}
oddInt([1, 2, 2, 2, 4, 4, 4, 4, 4, 4, 5, 5]);
