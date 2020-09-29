function solution(numbers) {
  var numberList = numbers.split("");
  var answers = findPrimeNumber(numberList);
  return [...new Set(answers)].length;
}

function primeNumber(numbers) {
  var nonPrime = [0, 1];
  if (nonPrime.includes(numbers)) return false;
  debugger;
  for (var i = 2; i * i <= numbers; i++) {
    if (numbers % i === 0) return false;
  }

  return true;
}

function findPrimeNumber(numberList, preNumber) {
  var frontNumber = preNumber || "";
  return numberList.reduce((primeNumbers, number, index) => {
    if (primeNumber(Number(frontNumber + number))) {
      primeNumbers.push(Number(frontNumber + number));
    }

    var nextNumberList = [...numberList];
    nextNumberList.splice(index, 1);

    var result = findPrimeNumber(nextNumberList, frontNumber + number);

    primeNumbers.push(...result);

    return primeNumbers;
  }, []);
}

var numbers1 = "17";
var a1 = solution(numbers1);
console.log(a1);

var numbers2 = "011";
var a2 = solution(numbers2);
console.log(a2);
