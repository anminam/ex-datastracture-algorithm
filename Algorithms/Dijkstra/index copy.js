const INF = 10000;
const arr = [
  [0, 2, 5, 1, INF, INF],
  [2, 0, 3, 2, INF, INF],
  [5, 3, 0, 3, 1, 5],
  [1, 2, 3, 0, 1, INF],
  [INF, INF, 1, 1, 0, 2],
  [INF, INF, 5, INF, 2, 0],
];
const vertexCount = arr.length;
const visitedArr = [];
let distanceArr = [];

function dijkstra(startIndex) {
  distanceArr = [...arr[startIndex]];
  visitedArr[startIndex] = true;

  for (let i = 0; i < vertexCount - 1; i++) {
    const smallIndex = getMinIndex();
    visitedArr[smallIndex] = true;
    for (let j = 0; j < vertexCount; j++) {
      if (visitedArr[j]) {
        continue;
      }
      if (distanceArr[j] > distanceArr[smallIndex] + arr[smallIndex][j]) {
        distanceArr[j] = distanceArr[smallIndex] + arr[smallIndex][j];
      }
    }
  }
}

function getMinIndex() {
  let result = -1;
  let min = INF;
  for (let i = 0; i < vertexCount; i++) {
    if (visitedArr[i]) {
      continue;
    }

    if (min > distanceArr[i]) {
      result = i;
      min = distanceArr[i];
    }
  }

  return result;
}

dijkstra(0);
distanceArr.forEach((item, i) => console.log(i, item));
