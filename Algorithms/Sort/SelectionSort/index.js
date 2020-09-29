function start(arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    const temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
}

/**
 * O(n^2)
 *
 * O(n^2) 중에서는 가장강력안 할고리즘
 *
 * 비교할때마다 스왑이 일어남으로 연산이 많다.
 * 선택정렬보다 더 느리다.
 * 정렬알고리즘중에 제일 느리다.
 */
const arr = [4, 7, 2, 3, 1, 5, 1, 2, 9, 8];
start(arr);
console.log(arr);
const a = [...Array(10).keys(), 1].reverse();
start(a);
