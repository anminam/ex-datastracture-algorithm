const INF = 100000;
const arr = [
  [0, 2, 5, 1, INF, INF],
  [2, 0, 3, 2, INF, INF],
  [5, 3, 0, 3, 1, 5],
  [1, 2, 3, 0, 1, INF],
  [INF, INF, 1, 1, 0, 2],
  [INF, INF, 5, INF, 2, 0],
];
const number = 6;

const visitedArr = [];
const distance = [];

console.log(arr);

function getSmallIndex() {
  let min = INF;
  let index = 0;
  for (let i = 0; i < number; i++) {
    if (distance[i] < min && !visitedArr[i]) {
      min = distance[i];
      index = i;
    }
  }
  return index;
}

function dijkstra(start) {
  for (let i = 0; i < number; i++) {
    distance[i] = arr[start][i];
  }
  visitedArr[start] = true;

  for (let i = 0; i < number - 2; i++) {
    let current = getSmallIndex();
    visitedArr[current] = true;
    for (let j = 0; j < 6; j++) {
      if (!visitedArr[j]) {
        if (distance[current] + arr[current][j] < distance[j]) {
          distance[j] = distance[current] + arr[current][j];
        }
      }
    }
  }
}

dijkstra(0);
distance.forEach((i) => console.log(i));
