function solution(citations) {
  var answer = 0;
  citations = citations.sort((a, b) => b - a);
  debugger;
  const len = citations.length;
  for (let i = 0; i < len; i++) {
    if (i >= citations[i]) {
      answer = i;
      break;
    }
  }
  if (answer === 0) {
    if (citations[0] !== 0) {
      answer = 1;
    }
  }
  return answer;
}

solution([3, 50, 100]);
solution([1, 1, 1, 4, 1]);
