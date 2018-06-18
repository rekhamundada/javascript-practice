function recSmallestInt(arr){
    var small = 0;

    if (arr.length === 1){
        return arr[0];
    }
    else if (arr[0] > arr[1]) {
      return recSmallestInt(arr.slice(1))
    }
        return recSmallestInt([arr[0]].concat(arr.slice(2)));
}
recSmallestInt([8,4,1,8,5]);
