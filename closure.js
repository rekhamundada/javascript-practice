function makeNum(num, func){
  if (func === undefined) return num;
  else return func(num);
}
function seven(func){
  return makeNum(7, func);
}
function five(func){
  return makeNum(5, func)
}
function times(x) {
  return function(y){
    return  y * x
  };
}

seven(times(five()))
