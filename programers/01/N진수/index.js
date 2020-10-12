function solution(n, t, m, p) {
  var answer = "";
  const answerArr = [];
  const ABC_LIST = ["A", "B", "C", "D", "E", "F"];

  let index = 0;
  let allCount = 0;
  //   debugger;
  while (answerArr.length < t) {
    let newCount = index;
    let tempAnswer = [];
    // debugger;
    while (newCount > 0) {
      let newCountRemain = newCount % n;
      //   debugger;
      if (newCountRemain >= 10) {
        // debugger;
        newCountRemain = ABC_LIST[newCountRemain - 10];
      }
      newCount = Math.floor(newCount / n);
      tempAnswer.push(newCountRemain);
    }

    if (tempAnswer.length === 0) {
      tempAnswer.push(0);
    }
    // debugger;
    tempAnswer.reverse();
    // tempAnswer = Number(tempAnswer.join("")).toString().split("");

    const tempanswerLength = tempAnswer.length;

    for (let i = 0; i < tempanswerLength; i++) {
      //   debugger;
      const flagIndex = allCount + p - 1 + i;
      if (flagIndex % m === 0) {
        answerArr.push(tempAnswer[i]);
      }
    }
    allCount += tempanswerLength;

    index++;
  }

  return answerArr.slice(0, t).join("");
}

// 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p 가 주어진다.

// const a = solution(2, 4, 2, 1);
const a = solution(16, 16, 2, 1);
debugger;
console.log(a);

// 0123456;
// 101;
// 0123456;
// 1001001;

// 0 1 10 11 100 101
// 0111
