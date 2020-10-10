function solution(n) {
  let answer = "";
  const NUM_LIST = [4, 1, 2];
  const numLength = NUM_LIST.length;
  while (n > 0) {
    console.log("s", n);
    let remain = n % numLength;
    n = Math.floor(n / numLength);
    if (remain === 0) {
      n--;
      remain = NUM_LIST[0];
    }
    console.log("e", n);
    answer = remain + answer;
  }
  console.log(answer);
  return answer;
}

let a = solution(10);
// 1 1 1
// 2 2 2
// 3 10 4
// 4 11 11
// 5 12 12
// 6 20 14
// 7 21 21
// 8 22 22
// 9 100 24
// 10 101 41
// 11 102 42

// 20212220
