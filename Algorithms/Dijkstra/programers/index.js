const INF = 10000000;
let table = [];
let distanceArr = [];
let visitedArr = [];

function solution(N, road, K) {
  table = new Array(N);
  for (let i = 0; i < N; i++) {
    table[i] = new Array(N).fill(INF);
    table[i][i] = 0;
  }

  road.forEach((item, i) => {
    const a1 = item[0] - 1;
    const a2 = item[1] - 1;
    if (table[a1][a2] > item[2]) {
      table[a1][a2] = item[2];
      table[a2][a1] = item[2];
    }
  });

  distanceArr = [...table[0]];
  visitedArr[0] = true;

  for (let i = 0; i < N - 1; i++) {
    let minValue = INF + 1;
    const minIndex = distanceArr.reduce((pre, current, index) => {
      if (!visitedArr[index] && minValue > current) {
        minValue = current;
        return index;
      } else {
        return pre;
      }
    }, -1);
    // debugger;
    visitedArr[minIndex] = true;

    for (let j = 0; j < N; j++) {
      if (visitedArr[j]) continue;

      if (distanceArr[j] > distanceArr[minIndex] + table[minIndex][j]) {
        distanceArr[j] = distanceArr[minIndex] + table[minIndex][j];
      }
    }
  }

  const result = distanceArr.filter((i) => i <= K).length;
  debugger;
  return result;
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
