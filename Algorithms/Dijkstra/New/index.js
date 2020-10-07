function solution(N, road, K) {
  const adjacent = new Array(N);
  for (let i = 0; i < N; i++) {
    adjacent[i] = new Array(N).fill(0);
    adjacent[i][i] = 0;
  }

  for (let a of road) {
    const value = adjacent[a[0] - 1][a[1] - 1];
    if (value && value < a[2]) continue;

    adjacent[a[0] - 1][a[1] - 1] = a[2];
    adjacent[a[1] - 1][a[0] - 1] = a[2];
  }

  const d = new Array(N).fill(Infinity);
  d[0] = 0;
  const queue = [];
  queue.push(0);
  while (queue.length) {
    const curr = queue.shift();
    for (let i = 0; i < N; i++) {
      if (!adjacent[curr][i]) continue;
      if (d[i] > d[curr] + adjacent[curr][i]) {
        d[i] = d[curr] + adjacent[curr][i];
        queue.push(i);
      }
    }
  }
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
