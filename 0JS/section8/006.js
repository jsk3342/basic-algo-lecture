function solution(t, arr) {
  let mv = 0;
  let n = arr.length;
  function DFS(L, sum) {
    if (t < sum) {
      return;
    }
    if (L == n) {
      mv = Math.max(mv, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return mv;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
