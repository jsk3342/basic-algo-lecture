function solution(v) {
  let answer;
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      console.log(v);
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
  return answer;
}

solution(3);
