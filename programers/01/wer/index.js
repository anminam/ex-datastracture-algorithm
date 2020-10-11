function solution(answers) {
  const answer = [];
  const orderArr = ["12345", "21232425", "3311224455"];
  let answerArr = new Array(orderArr.length).fill(0);

  answers.forEach((value, i) => {
    for (let j = 0; j < orderArr.length; j++) {
      if (value == orderArr[j][i % orderArr[j].length]) {
        answerArr[j] += 1;
      }
    }
  });
  const max = Math.max(...answerArr);

  answerArr.forEach((v, i) => {
    if (max === v) {
      answer.push(i + 1);
    }
  });

  return answer;
}

var a = solution([1, 2, 3, 4, 5]);
console.log(a);
