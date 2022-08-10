// function solution(arr) {
//   // 1. 상하좌우 구해서 제일 크면 카운팅
//   let count = 0;
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[0][j] || arr[0][i] || arr[i][0] || arr[j][0]) {

//       }
//       if (
//         arr[i][j] > arr[i][j + 1] &&
//         arr[i][j] > arr[i][j - 1] &&
//         arr[i][j] > arr[i + 1][j] &&
//         arr[i][j] > arr[i - 1][j]
//       ) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// let arr = [
//   [5, 3, 7, 2, 3],
//   [3, 7, 1, 6, 1],
//   [7, 2, 5, 3, 4],
//   [4, 3, 6, 4, 1],
//   [8, 7, 3, 5, 2],
// ];
// console.log(solution(arr));

function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
