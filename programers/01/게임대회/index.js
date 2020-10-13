function solution(n, a, b) {
  var answer = 3;
  let count = 0;
  while (a !== 1 && b !== 2) {
    if (a !== 1) {
      a = a / 2 - 1;
    }
    if (b !== 2) {
      b = b / 2 - 1;
    }
    if (count++ === 1000) {
      break;
    }
  }
  return answer;
}
solution(8, 4, 7);
