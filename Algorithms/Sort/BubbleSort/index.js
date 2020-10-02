const start = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

const data = [4, 7, 2, 3, 1, 5, 1, 2, 9, 8, 8, 8];
start(data);
console.log(data);
