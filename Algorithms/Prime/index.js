function primeNumber(str) {
  const num = Number(str);
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
const list = ["1", "2", "9", "7", "22"];
console.log("simple");
list.forEach((item) => console.log(item, primeNumber(item)));
