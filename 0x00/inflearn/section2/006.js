function solution(arr) {
  let max = 0;
  let sum = 0;
  let heisum = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    sum = 0;
    heisum = 0;
    for (let j = 0; j < n; j++) {
      sum += arr[i][j];
      heisum += arr[j][i];
    }
    sum = 0;
    heisum = 0;
    max = Math.max(sum, heisum);
  }
  sum = heisum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i][i];
    heisum += arr[i][n - 1 - i];
  }
  max = Math.max(sum, heisum);
  return max;
}
let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
