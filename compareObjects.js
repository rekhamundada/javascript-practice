compareObjects({ name: 'nick' }, { name: 'nick' })
// -> true

compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 })

function compareObjects(obj1,obj2) {

  for (var key1 in obj1){
    if (obj1[key1] !== obj2[key1]) return false;
  }
  for (var key2 in obj2){
    if (obj2[key2] !== obj1[key2]) return false;
  }
  return true;
}
