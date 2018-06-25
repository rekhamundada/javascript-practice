removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]);
function removeDuplicate(arr){
  var obj = {};
  var duplicates = [];
  for (var i = 0; i < arr.length;i++){
    if (!obj[arr[i]]){
      duplicates.push(arr[i]);
      obj[arr[i]] = true;
    }
  }
  return duplicates;
}
