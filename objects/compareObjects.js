compareObjects({ name: 'nick' }, { name: 'nick' })
// -> true

compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 })

function compareObjects(obj1, obj2) {

  for (var key1 in obj1){
    if (obj1[key1] !== obj2[key1]) return false;
  }
  for (var key2 in obj2){
    if (obj2[key2] !== obj1[key2]) return false;
  }
  return true;
}

function compareObjects(a, b) {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);
  console.log(aProps, 'is a') // [ 'name' ] 'is a'
  console.log(bProps, 'is b') // [ 'name' ] 'is b'
  if (aProps.length !== bProps.length) return false;
  // for(var key in aProps) {
  //   console.log(aProps[key], 'is key')// name is key
  //   console.log(a[aProps[key]], 'is value') //zeke is value
  //   if(a[aProps[key]] !== b[bProps[key]]) return false
  // }
  for(var i=0; i<aProps.length; i++){
    var propName = aProps[i]
    if (a[propName] !== b[propName]) return false;
  }
  return true;
}
