function primeNumber(nums) {
  const num = Number(nums);
  if (num <= 1) return false;

  for (let i = 2; i * i <= nums; i++) {
    if (nums % i === 0) return false;
  }

  return true;
}

var numbers1 = "17";
var a1 = primeNumber(numbers1);
console.log(a1);

var numbers2 = "011";
var a2 = primeNumber(numbers2);
console.log(a2);

var numbers3 = "7";
var a3 = primeNumber(numbers3);
console.log(a3);

var numbers4 = "2";
var a4 = primeNumber(numbers4);
console.log(a4);
