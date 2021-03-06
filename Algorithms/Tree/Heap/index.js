const start = (arr) => {
  const length = arr.length;

  for (let i = Math.floor(length / 2 - 1); i >= 0; i--) {
    heapify(arr, length, i);
  }

  for (let i = length - 1; i >= 0; i--) {
    swap(arr, i, 0);
    heapify(arr, i, 0);
  }
};
const heapify = (arr, max, i) => {
  let root = i;
  let left = root * 2 + 1;
  let right = left + 1;

  if (max > left && arr[root] < arr[left]) {
    root = left;
  }
  if (max > right && arr[root] < arr[right]) {
    root = right;
  }

  if (root != i) {
    swap(arr, root, i);
    heapify(arr, max, root);
  }
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const arr = [7, 6, 5, 8, 3, 5, 9, 1, 6];
start(arr);
console.log(arr);
