
function solution(arr) {
  var answer = 0;
  var answer = arr.shift();
  while(arr.length) {
    const newValue = arr.shift();
    answer = lcm(answer, newValue);
  }

  return answer;
}

function lcm(a,b) {
  return a* b / gcd(a,b);

}
function gcd(a,b) {
  while(b!==0) {
    const r= a % b;
    a = b;
    b = r;
  }
  return a;
}
var a = gcd(122,12);
console.log(a);
solution([2,6,8,14]);