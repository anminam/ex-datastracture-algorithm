function solution(arr) {
  var answer = 0;
  
  return answer;
}

function gcd(a, b) {
  while(b!=0) {
    const r = a % b;
    console.log(a,b,'나머지',r);
    a = b;
    b = r;
  }
  return a;
}
function lcm(a,b) {
  return a * b /gcd(a,b);
}
const b = gcd(10, 20);
console.log(b);
const c = lcm(10,20);
console.log(c);
debugger;

const a = [2,6,8,14]
solution(a);
