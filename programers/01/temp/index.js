function solution(number) {
  const arr = new Array(number).fill(0);
  bfs(arr, 0);
}

function bfs(arr, start) {
  const queue = [];
  q.push(start);
  arr[start] = true;
  while (!q.empty()) {
    const x = q.front();
    q.pop();
    console.log("방문", x);
    for (let i = 0; i < arr[x].size(); i++) {
      let y = arr[x][i];
      if (!c[y]) {
      }
    }
  }
}

solution(7);
