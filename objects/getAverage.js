getAvg([['richard', 80], ['charles', 70], ['ben', 94], ['richard', 100], ['ben', 100]]);
function getAvg(arr){
  var obj = {};
  for (var i = 0;i < arr.length;i++){
    if (!obj[arr[i][0]]){
      obj[arr[i][0]] = [arr[i][1]];
      console.log(obj);
    } else {
      obj[arr[i][0]].push(arr[i][1]);
    }
  }
  for (var student in obj){
    var total = [];
   if (!obj.hasOwnProperty(student)) continue;
    total = obj[student].reduce((a, b) => {return (a + b);}, 0);
    console.log(total, ' is total');
    obj[student] = Math.floor(total / (obj[student].length));
   }
   console.log( obj[student], 'at end');
   var arr = Object.values(obj);
   var maxScore = Math.max(...arr);
   var name = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
   console.log({name, maxScore});
}

function highestAverage(arr){
  var obj = {};
  for (var i = 0;i < arr.length;i++){
   var student = arr[i];
    if (!obj.hasOwnProperty(student[0])){
        obj[student[0]] = [];
    }
      obj[student[0]].push(student[1]);
  }
  console.log(obj);
  for (var key in obj) {
if (!obj.hasOwnProperty(key)) continue;
var total = obj[key].reduce(function(next, cur) {
    return next + parseInt(cur);
}, 0);

obj[key] = Math.floor(total / obj[key].length);
}
console.log(obj);
return obj;
}
var arr = [
  ['Bobby', '87'],
  ['Charles', '100'],
  ['Eric', '65'],
  ['Charles', '22'],
  ['Charles', '37'],
  ['Eric', '49']];
highestAverage(arr);

getAvg([['richard', 80], ['charles', 70], ['ben', 94], ['richard', 100], ['ben', 100]]);
function getAvg(arr){
  var obj = {};
  for (var i = 0;i < arr.length;i++){
    // console.log(arr[i][0], 'is the key')
   //  console.log(arr[i][1], 'is the val')
    if (!obj[arr[i][0]]){
      obj[arr[i][0]] = [arr[i][1]];
      console.log(obj);
    } else {
      obj[arr[i][0]].push(arr[i][1]);
      // console.log(obj[arr[i][0]], 'qqqq')
      // console.log(obj, 'is else obj')
    }
  }
  let finalScores = [];
  for (var student in obj){
   // console.log(student, ' is student key')
  //  console.log(obj[student], ' is the student value')
     finalScores.push(obj[student].reduce((a, b) => {return (a + b);}) / obj[student].length);
   }
   console.log(finalScores, ' is the result');
   return Math.max(...finalScores);
}
