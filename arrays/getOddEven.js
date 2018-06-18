function findOutlier(integers){
    var oddCount = 0;
    var evenCount = 0;
    for (var i = 0;i < integers.length;i++) {
      if (integers[i] % 2 !== 0) {
          oddCount++;
        console.log(oddCount, 'is odd count');
      } else if (integers[i] % 2 === 0) {
        evenCount++;
         console.log(evenCount, 'is even count');
      }
      if (evenCount > 1) {
        return findOddNum(integers);
      }
      if (oddCount > 1) {
        return findEvenNum(integers);
      }
    }
  }

  function findOddNum(arr) {
    for (var i = 0;i < arr.length;i++) {
      if (arr[i] % 2 !== 0) return arr[i];
    }
  }
  function findEvenNum(arr) {
    for (var i = 0;i < arr.length;i++) {
      if (arr[i] % 2 === 0) return arr[i];
    }
  }
  findOutlier([0, 1, 2]);
  // 1
