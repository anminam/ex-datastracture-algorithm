function solution(N, road, K) {
  debugger;
  const distance = new Array(N + 1).fill(Infinity);
  distance[1] = 0;

  const adjacent = [new Array(N + 1).fill(0)];
  for (let i = 0; i < N; i++) {
    adjacent.push(new Array(N + 1).fill(0));
  }

  for (const r of road) {
    if (adjacent[r[0]][r[1]] && adjacent[r[0]][r[1]] < r[2]) continue;
    adjacent[r[0]][r[1]] = r[2];
    adjacent[r[1]][r[0]] = r[2];
  }

  const queue = [1];
  while (queue.length) {
    const cur = queue.shift();
    for (const [i, v] of adjacent[cur].entries()) {
      if (!v) continue;
      let d = v + distance[cur];
      debugger;
      if (d < distance[i]) {
        queue.push(i);
        distance[i] = d;
      }
    }
  }

  return distance.filter((v) => v <= K).length;
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
