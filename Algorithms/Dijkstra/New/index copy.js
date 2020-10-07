function solution(N, road, K) {
  const adjacent = new Array(N);
  for (let i = 0; i < N; i++) {
    adjacent[i] = new Array(N).fill(0);
  }

  for (let i = 0; i < road.length; i++) {
    const x = road[i][0] - 1;
    const y = road[i][1] - 1;
    const value = road[i][2];
    if (adjacent[x][y] && adjacent[x][y] < value) {
      continue;
    }
    adjacent[x][y] = value;
    adjacent[y][x] = value;
  }

  const d = new Array(N).fill(Infinity);
  d[0] = 0;

  const queue = [];
  queue.push(0);

  while (queue.length) {
    const index = queue.shift();
    for (let i = 0; i < N; i++) {
      const newValue = adjacent[index][i];
      if (!newValue) continue;
      if (d[i] > newValue + d[index]) {
        queue.push(i);
        d[i] = newValue + d[index];
      }
    }
  }

  return d.filter((i) => i <= K).length;
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
