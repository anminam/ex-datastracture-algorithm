function solution(n, t, m, p) {
  const answerArr = [];
  const list = [];
  for (let i = 0; i < t * m; i++) {
    list.push(changeN(i, n));
  }

  const joind = list.join("");
  console.log(list.join(""));

  for (let i = 0; i < joind.length; i++) {
    if (i % m === 0) {
      answerArr.push(joind[i]);
    }

    if (answerArr.length >= t) {
      break;
    }
  }
  return answerArr.join("");
}

function changeN(number, n) {
  let result = "";
  if (number == 0) {
    return "0";
  }
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  while (number > 0) {
    const remain = number % n;
    result = arr[remain] + result;
    number = Math.floor(number / n);
  }
  return result;
}

// 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p 가 주어진다.

const a = solution(2, 4, 2, 1);
// const a = solution(16, 16, 2, 1);
debugger;
console.log(a);

// 0123456;
// 101;
// 0123456;
// 1001001;

// 0 1 10 11 100 101
// 0111
