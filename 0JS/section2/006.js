function solution(arr) {
  const len = arr.length;
  let center = 0;
  let mx = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < len; i++) {
    let row = 0;
    let column = 0;
    for (let j = 0; j < len; j++) {
      if (i === j) center += arr[i][j];
      row += arr[i][j];
      column += arr[j][i];
    }
    mx = Math.max(mx, row, center, column);
    row = 0;
    column = 0;
  }

  return mx;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
