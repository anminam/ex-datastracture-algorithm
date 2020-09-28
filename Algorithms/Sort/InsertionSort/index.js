function start(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const s = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = s;
      }
      console.log(arr);
    }
    console.log(i, "끝");
  }
}

/**
 * O(n^2)
 *
 * 선택정렬과 시간복잡도는 같지만
 * 비교할때마다 스왑이 일어남으로 연산이 많다.
 * 선택정렬보다 더 느리다.
 * 정렬알고리즘중에 제일 느리다.
 */
start([4, 7, 2, 3, 1, 5, 1, 2, 9, 8]);
