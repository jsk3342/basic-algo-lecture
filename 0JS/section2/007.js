function solution(arr) {
  const len = arr.length;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let cnt = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let flag = true;
      for (let dir = 0; dir < 4; dir++) {
        const nx = i + dx[dir];
        const ny = j + dy[dir];
        if (nx < 0 || nx >= len || ny < 0 || ny >= len) continue;
        if (arr[i][j] < arr[nx][ny]) {
          flag = false;
          break;
        }
      }

      if (flag) {
        cnt++;
      }
    }
  }
  return cnt;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
