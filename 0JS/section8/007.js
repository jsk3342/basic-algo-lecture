function solution(m, ps, pt) {
  let mv = 0;
  let t = 0;
  let n = ps.length;
  function DFS(L, sum, t) {
    if (t > m) {
      return;
    }
    if (L == n) {
      mv = Math.max(mv, sum);
    } else {
      console.log(sum, t);
      DFS(L + 1, sum + ps[L], t + pt[L]);
      DFS(L + 1, sum, t);
    }
  }
  DFS(0, 0, 0);
  return mv;
}
let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
