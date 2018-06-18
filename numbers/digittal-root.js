function digital_root(n) {
  var fn = function(){
      console.log(String(n).split(''), 'is the split')
      console.log(String(n).split('').map(Number), 'is the map')
      console.log(  String(n).split('').map(Number).reduce((a,b) => a+b), 'is the reduce');
      return String(n).split('').map(Number).reduce((a,b) => a+b)
      }
      return fn() > 9 ? digital_root(fn()) : fn()
  }

  digital_root(16)
