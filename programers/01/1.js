function solution(numbers) {
  let answer = -1;
  // 해쉬에 저장
  const answerObj = {};
  // 모든 값 해쉬에 넣기
  numbers.forEach((i) => (answerObj[i] = !answerObj[i] ? 1 : answerObj[i] + 1));
  // 과반수 구하기
  const halfValue = Math.floor(numbers.length / 2);
  // 과반수보다 큰 값 답으로 넣기
  for (let value in answerObj) {
    if (answerObj[value] > halfValue) {
      answer = Number(value);
    }
  }
  // console.log(answerObj, halfValue)
  return answer;
}
