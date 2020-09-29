function start(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let j = i;
    while (arr[j - 1] > arr[j]) {
      const s = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = s;
      j--;
      console.log(arr);
    }
    console.log(i, "끝");
  }
}

/**
 * O(n^2)
 *
 * O(n^2) 중에서는 가장강력한 알고리즘
 *
 * 비교할때마다 스왑이 일어남으로 연산이 많다.
 * 선택정렬보다 더 느리다.
 * 정렬알고리즘중에 제일 느리다.
 */
start([4, 7, 2, 3, 1, 5, 1, 2, 9, 8]);
const a = [...Array(10).keys(), 1].reverse();
start(a);
