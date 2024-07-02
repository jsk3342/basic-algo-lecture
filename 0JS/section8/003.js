function solution(n) {
  let answer = "";
  function DFS(n) {
    if (n > 7) return;
    else {
      DFS(n + n);
      DFS(n + n + 1);
      answer += n + " ";
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
