function mergeSortedArray(a, b){
  var merged = [];
  var aElm = a[0];
  var bElm = b[0];
  var i = 1;
  var j = 1;
  if (!a.length) return b;
  if (!b.length) return a;
  while (aElm || bElm) {
    if (aElm && !bElm || aElm < bElm){
      merged.push(aElm);
      aElm = a[i++];
    } else {
      merged.push(bElm);
      bElm = b[j++];
    }
  }
  return merged;
}
mergeSortedArray([2, 5, 6, 9], [1, 2, 3, 29]);
