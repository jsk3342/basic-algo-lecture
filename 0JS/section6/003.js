function solution(board, moves) {
  let answer = 0;
  const stk = [];
  const n = board[0].length;
  for (let t of moves) {
    for (let i = 0; i < n; i++) {
      const idx = t - 1;
      if (board[i][idx] != 0) {
        console.log(board[i][idx]);
        if (stk.length != 0 && stk[stk.length - 1] == board[i][idx]) {
          stk.pop();
          answer += 2;
        } else {
          stk.push(board[i][idx]);
          board[i][idx] = 0;
        }
        break;
      }
    }
  }

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
