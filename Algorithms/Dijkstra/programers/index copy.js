let arr = [];
let distanceArr = [];
const visitedArr = [];

const INF = 5000000;
function solution(N, road, K) {
  arr = new Array(N);
  for (let i = 0; i < N; i++) {
    arr[i] = new Array(N).fill(INF);
    arr[i][i] = 0;
  }

  road.forEach((item, i) => {
    let a1 = item[0] - 1;
    let a2 = item[1] - 1;
    const result = item[2];

    const oldValue1 = arr[a1][a2];
    const oldValue2 = arr[a2][a1];
    arr[a1][a2] = oldValue1 > result ? result : oldValue1;
    arr[a2][a1] = oldValue2 > result ? result : oldValue2;
  });

  distanceArr = [...arr[0]];
  visitedArr[0] = true;

  for (let i = 0; i < N - 1; i++) {
    const minIndex = getMinIndex(distanceArr, visitedArr);
    visitedArr[minIndex] = true;
    for (let j = 0; j < N; j++) {
      if (visitedArr[j]) continue;
      const newValue = distanceArr[minIndex] + arr[minIndex][j];
      if (distanceArr[j] > newValue) {
        distanceArr[j] = newValue;
      }
    }
  }

  return distanceArr.filter((i) => i <= K).length;
}

function getMinIndex(arr, visitiedArr) {
  let index = -1;
  let min = INF + 1;
  arr.forEach((item, tIndex) => {
    if (!visitiedArr[tIndex]) {
      if (min > item) {
        min = item;
        index = tIndex;
      }
    }
  });

  return index;
}

const road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];

// solution(5, road, 3);

const a = solution(
  6,
  [
    [1, 2, 1],
    [1, 3, 2],
    [2, 3, 2],
    [3, 4, 3],
    [3, 5, 2],
    [3, 5, 3],
    [5, 6, 1],
  ],
  4
);

console.log(a);
