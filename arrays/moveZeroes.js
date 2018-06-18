var moveZeroes = function(nums) {
  var index = 0;
  for (var i = 0; i < nums.length;i++){
      if (nums[i] != 0){
        nums[index++] = nums[i];
      }
  }
  for (var k = index; k < nums.length;k++){
      nums[k] = 0;
  }

};

moveZeroes([0, 1, 23, 0, 12, 34]);
