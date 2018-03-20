var findMaxConsecutiveOnes = function(nums) {
  var count =0;
  var maxCount =0;
  for(var i=0; i<nums.length;i++){
      count = nums[i]===1 ? count+1 : 0
      if(count> maxCount){
      maxCount = count
  }
  }
  return maxCount;
};

findMaxConsecutiveOnes([1,1,0,1,1,1]) // 3
