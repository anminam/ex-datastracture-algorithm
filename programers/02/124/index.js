function solution(n) {
  var answer = '';
  while(n > 0) {
    let d = n % 3 ;
    n = Math.floor(n / 3);

    if(d === 0) {
      n--;
      d = '4';
    }
    answer = d + answer;
  }

  return answer;
}

const a = solution(5)