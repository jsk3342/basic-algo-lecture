function solution(n, arr) {
  let answer = 0;
  const dist = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );
  const ch = Array.from({ length: n + 1 }, () => 0);

  for (let [x, y] of arr) {
    dist[x][y] = 1;
  }

  function DFS(v) {
    if (v == n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        if (dist[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
