function solution(s) {
  var arr = s.split(" ").map(i=>Number(i)).sort((a,b) => a-b);
  return `${arr[0]} ${arr[arr.length-1]}`;
}
let a = solution("-1 -2 -3 -4");
console.log(a);
