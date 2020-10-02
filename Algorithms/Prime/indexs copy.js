const solution = (numbers) => {
  let answer = 0;
  const answerList = findPrimeNumbers(numbers.split(""));
  debugger;

  return answer;
};

const findPrimeNumbers = (numbers, preNumber) => {
  const firstnumber = preNumber || "";

  return numbers.reduce((answerList, value, index) => {
    const targetValue = firstnumber + value;
    if (findPrimeNumber(Number(targetValue))) {
      answerList.push(targetValue);
    }

    const newNumbers = [...numbers];
    newNumbers.splice(index, 1);
    const tempList = findPrimeNumbers(newNumbers, targetValue);
    answerList.push(...tempList);
    return answerList;
  }, []);
};
const findPrimeNumber = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

var numbers1 = "17";
var a1 = solution(numbers1);
console.log(a1);

// var numbers2 = "011";
// var a2 = solution(numbers2);
// console.log(a2);
