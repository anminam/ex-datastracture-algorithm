const quick = (arr, start, end) => {
  if (start >= end) {
    return;
  }

  let pivot = start;
  let left = pivot + 1;
  let right = end;

  while (left < right) {
    while (arr[pivot] >= arr[left]) {
      left++;
    }
    while (arr[pivot] <= arr[right] && start < right) {
      right--;
    }

    if (left > right) {
      swap(arr, pivot, right);
    } else {
      swap(arr, left, right);
    }
  }

  quick(arr, start, right - 1);
  quick(arr, right + 1, end);
};
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

/**
 * 여러가지방법이 있지만 제일 첫번재것을 피봇으로 선택
 * O(N * logN)
 */
const data = [4, 7, 2, 3, 1, 5, 1, 2, 9, 8, 8, 8];
// const data = [100, 1, 3];
quick(data, 0, data.length - 1);
console.log(data);
// const a = [...Array(10).keys(), 1].reverse();
// start(a);
