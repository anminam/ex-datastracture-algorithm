function solution(s) {
  var answerArr = [];
  var arr = s.split("");
  if (arr[0] === ")") return false;
  arr.forEach((v) => {
    if ("(" === v) {
      answerArr.push(v);
    } else {
      answerArr.pop();
    }
  });
  return answerArr.length === 0;
}
solution("()()");
