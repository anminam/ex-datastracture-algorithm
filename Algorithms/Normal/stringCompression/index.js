function start(str) {
  let answerList = [];
  let oldLength = str.length;

  const strList = str.split("");
  let oldStr;
  let count = 0;
  strList.forEach((nowStr, index) => {
    if (index === 0) {
      oldStr = nowStr;
      count = 1;
      answerList.push(nowStr);
    } else if (oldStr != nowStr) {
      answerList.push(count);
      oldStr = nowStr;
      count = 1;
      answerList.push(nowStr);
    } else {
      count++;
    }
  });
  answerList.push(count);
  let newLength = answerList.length;
  const answer = oldLength < newLength ? str : answerList.join("");

  return answer;
}

let result = start("aabcccaaa");
console.log(result);
result = start("abcde");
console.log(result);

result = start("aaaaaaaabaaaaaaaaaaaaaaaaaaaaa");
console.log(result);
