function solution(arr){
  var start = arr.pop();
  var result = 0;
  
  while(arr.length) {
    var b = arr.pop();
    result = lgm(start, b);
    start = result;
  }
  return result;
}
function lgm(a,b) {
  return a * b / gcd(a,b);
}
function gcd (a,b) {
  while(b!==0) {
    var r = a%b;
    a = b;
    b = r;
  }

  return a;
}

var a = solution([2,6,8,14]);
debugger;
