function quick(arr, start, end) {
  if (start >= end) {
    return;
  }

  const pivot = start;
  let left = start + 1;
  let right = end;
  let temp;

  while (left < right) {
    while (arr[pivot] <= arr[left]) {
      left++;
    }
    while (arr[pivot] >= arr[right] && start < right) {
      right--;
    }

    if (left > right) {
      temp = arr[pivot];
      arr[pivot] = arr[right];
      arr[right] = temp;
    } else {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }

  quick(arr, start, right - 1);
  quick(arr, right + 1, end);
}

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
