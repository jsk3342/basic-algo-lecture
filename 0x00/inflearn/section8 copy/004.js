function solution(v) {
  let anwer = [];
  let check = new Array(v).fill(0);
  function DFS(n) {
    if (n === v + 1) {
      let tmp = "";
      for (i = 1; i <= n; i++) {
        if (check[i] === 1) tmp += i + " ";
      }
      anwer.push(tmp);
    } else {
      check[n] = 1;
      DFS(n + 1);
      check[n] = 0;
      DFS(n + 1);
    }
  }
  DFS(1);

  return anwer;
}

solution(3);
