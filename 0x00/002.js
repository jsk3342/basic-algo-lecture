//주어진 길이 N의 int 배열 arr에서 합이 100인 서로 다른 위치의 두 원소가 존재하면
// 1을, 존재하지 않으면 0을 반환하는 함수를 작성하라.
// arr의 각 수는 0이상 100 이하이고 N은 1000 이하이다.

var arr = [50, 42, 58];
var length = arr.length;

function solution(arr, length) {
  var result = 100;
  for (let i = 0; i < length; i++) {
    if (arr.indexOf(result - arr[i]) !== -1) {
      return 1;
    }
  }
  return 0;
}

solution(arr, length);

// function solution(arr, length) {
//   var result = 0;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       if (i !== j) {
//         if (arr[i] + arr[j] === 100) {
//           result = 1;
//         }
//       }
//     }
//   }
//   return result;
// }

// solution(arr, length);
