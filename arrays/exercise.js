function foo(x) {
  return function(){
    return x
  }
}
console.log(typeof(foo))
function add(x,y) {
  return x+y;
}
function add2(fn1,fn2){
  return add( fn1(), fn2())
}
function addn(arr) {
  // var sum=0;
  // for(var i=0;i<arr.length;i++){
  //   sum = add2(foo(arr[i]),foo(sum) )
  // }
  // return sum;
  // if(arr.length <=2 ){
  //   return add2(arr[0], arr[1]);
  // }
  // return addn(
  //   [function(){
  //     return add2(arr[0],arr[1])
  //   }]
  //   .concat(arr.slice(2))
  //   );
 return arr.slice(1)
     .reduce(function(x, y) {
        return function(){
          return add2(x,y)
        }
     },arr[0])()

}
addn([foo(10),foo(3),foo(2)])

function addN(... args){
  return add2(...args())
}
