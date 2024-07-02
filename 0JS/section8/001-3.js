function solution(n) {
  function DFS(L) {
    if (L === 0) return 1;
    else {
      L + DFS(L - 1);
      const a = 1 + 3;
      const b = 1 + 3;
      const c = 1 + 3;
    }
  }
  DFS(n);
}

console.log(solution(3));
