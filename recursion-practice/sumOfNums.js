function sumIter(){
  var sum =0;
  for (var i=0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum;
}
sumIter(3,4,5)

function sumRecur(){
  var args = [].slice.call(arguments)

  if (args.length <= 2){
    return args[0] + args[1];
    //  return args[0] * args[1]; for multiplication
  }
  return args[0] + sumRecur.apply(null, args.slice(1));
}

sumRecur(3,4,5);

// with Rest/spade operator
function sumRecur1(...args){
  if (args.length <= 2){
    return args[0] + args[1];
  }
  return (
    args[0] +
    sumRecur1(...args.slice(1))
  );
}
sumRecur1(3,4,5);
