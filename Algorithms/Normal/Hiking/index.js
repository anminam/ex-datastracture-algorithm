function start(length, path) {
  const arr = path.split("");
  let result = 0;

  arr.forEach((item, i) => {
    if (i == 0) {
      item === "U" ? result++ : result--;
      // 0 이상일때
    } else {
      const oldItem = arr[i - 1];
      if (oldItem !== item) {
        item === "U" ? result++ : result--;
      }
    }
  });
  return result;
}

const result = start(12, "DDUUDDUDUUUD");
console.log(result);
