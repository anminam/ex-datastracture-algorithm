function solution(numbers) {
  const arr = numbers.split("");
  let answerArr = find(arr);
  answerArr = answerArr.map((i) => Number(i));
  const answer = [...new Set(answerArr)].length;
  return answer;
}

function find(numbers, beforeNumber) {
  const front = beforeNumber || "";
  const result = [];
  numbers.forEach((v, i) => {
    if (isPrime(front + v)) {
      result.push(front + v);
    }

    const newNumbers = numbers.slice();
    newNumbers.splice(i, 1);

    result.push(...find(newNumbers, front + v));
  });

  return result;
}

function isPrime(number) {
  number = Number(number);
  if (number <= 1) return false;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

let a = solution("011");
console.log(a);
