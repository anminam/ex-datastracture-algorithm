function solution(msg) {
  var answer = [];
  const startCode = "A".charCodeAt();
  const endCode = "Z".charCodeAt();
  var obj = {};
  for (let i = startCode; i <= endCode; i++) {
    obj[String.fromCharCode(i)] = i - startCode;
  }

  // debugger;
  const arr = msg.split("");

  while (arr.length !== 0) {
    let oldStr = arr.splice(0, 1);
    if (!oldStr) {
      break;
    }
    var tempAnswer = 0;
    var tt = 0;
    let flagCounter = 1;

    let answerNumber = "";
    do {
      let tempAnswerNumber = obj[oldStr];
      if (tempAnswerNumber) {
        answerNumber = tempAnswerNumber;
      }
      debugger;
      oldStr = oldStr + arr.slice(0, flagCounter);
      tempAnswer = obj[oldStr];
      debugger;
      flagCounter++;
      if (tt++ == 100) break;
    } while (tempAnswer);
    const tempIndex = Object.keys(obj).length;
    obj[oldStr] = tempIndex;
    debugger;

    // let findedAnswer = "";

    // do {
    //   if (!obj[addedStr]) {
    //     debugger;
    //     findedAnswer = "";
    //     break;
    //   }
    //   flagCounter++;
    // } while (findedAnswer);
  }

  debugger;

  //  답

  return answer;
}

const a = solution("KAKAO");
console.log(a);
