function primeNumber(nums) {
  const num = Number(nums);
  if (num <= 1) return false;

  for (let i = 2; i * i <= nums; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const list = ["1", "2", "9", "7", "22"];
list.forEach((item) => console.log(item, primeNumber(item)));
