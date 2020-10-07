const INF = 1000;
const arr = [
  [0, 2, 5, 1, INF, INF],
  [2, 0, 3, 2, INF, INF],
  [5, 3, 0, 3, 1, 5],
  [1, 2, 3, 0, 1, INF],
  [INF, INF, 1, 1, 0, 2],
  [INF, INF, 5, INF, 2, 0],
];
const vertexCount = arr.length;

let distanceArr = [];
const visitedArr = [];

const dijkstra = (startIndex) => {
  distanceArr = [...arr[startIndex]];
  visitedArr[startIndex] = true;

  for (let i = 0; i < vertexCount - 1; i++) {
    const minIndex = getMinIndex();
    visitedArr[minIndex] = true;
    for (let j = 0; j < vertexCount; j++) {
      if (visitedArr[j]) continue;

      const newValue = distanceArr[minIndex] + arr[minIndex][j];
      if (distanceArr[j] > newValue) {
        distanceArr[j] = newValue;
      }
    }
  }
};

const getMinIndex = () => {
  let min = INF;
  return distanceArr.reduce(
    (pre, curr, i) => (!visitedArr[i] && min > curr ? i : pre),
    -1
  );
};

dijkstra(0);
distanceArr.forEach((item, i) => console.log(i, item));
