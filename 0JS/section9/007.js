function solution(board) {
  let answer = 0;
  const n = board.length;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== 0) {
        answer++;
        const queue = [];
        board[i][j] = 0;
        queue.push([i, j]);
        while (queue.length) {
          const [curX, curY] = queue.shift();
          for (let k = 0; k < 4; k++) {
            const nx = curX + dx[k];
            const ny = curY + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] !== 0) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
