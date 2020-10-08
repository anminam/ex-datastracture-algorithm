function solution(numbers) {
  let answer = numbers
    .sort((i, v) => v.toString() + i.toString() - (i.toString() + v.toString()))
    .join("");

  return Number(answer) === 0 ? "0" : answer;
}

var a = solution([1, 112]);
// var a = solution([131, 13, 3, 30, 34, 5, 9]);
// var a = solution([0, 0, 0, 0]);
console.log(a);
