function solution(number) {
  const splitArr = number.split("");

  const a = find(splitArr);
}

function find(arr, beforNumbers) {
  const result = [];
  const front = beforNumbers || "";

  arr.forEach((v, i) => {
    const newValue = front + v;
    console.log("비교", newValue);
    if (isPrime(newValue)) {
      result.push(newValue);
    }

    const nextArr = arr.slice();
    nextArr.splice(i, 1);

    result.push(...find(nextArr, newValue));
  });

  return result;
}

function isPrime(number) {
  number = Number(number);
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % 2 === 0) {
      return false;
    }
  }
  return true;
}
let a = solution("1234");
console.log(a);
