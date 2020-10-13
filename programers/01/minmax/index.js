function solution(s) {
  var answer = "";
  let arr = s.split(" ").map((v) => Number(v));
  let min = Infinity;
  let max = -Infinity;
  arr.forEach((v) => {
    if (min > v) {
      min = v;
    }
    if (max < v) {
      max = v;
    }
  });
  answer = `${min} ${max}`;
  return answer;
}

let a = solution("-1 -2 -3 -4");
console.log(a);
