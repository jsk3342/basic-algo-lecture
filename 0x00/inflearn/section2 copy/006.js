function solution(arr) {
  let max = 0;
  let sum,
    sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      //행, 열 합 구하기
      sum += arr[i][j];
      sum1 += arr[j][i];
    }
    max = Math.max(sum, sum1);
    sum = sum1 = 0;
    //대각 합 구하기
    for (let i = 0; i < arr.length; i++) {
      sum;
    }
    max = Math.max(sum, sum1);
    sum = sum1 = 0;
  }

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
