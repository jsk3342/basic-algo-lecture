function solution(n, arr) {
  let answer;
  let max = 0;
  for (let x of arr) {
    let sum = 0;
    let tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) max = sum;
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

// function solution(n, arr) {
//   let answer;
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let x of arr) {
//     let sum = 0,
//       tmp = x;
//     while (tmp) {
//       sum += tmp % 10;
//       tmp = Math.floor(tmp / 10);
//     }
//     if (sum > max) max = sum;
//   }

//   return answer;
// }

// let arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));

// function solution(arr) {
//   let answer;
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let x of arr) {
//     let sum;
//     sum = x
//       .toString()
//       .split("")
//       .reduce((a, b) => a + Number(b), 0);
//     if (sum > max) {
//       max = sum;
//       answer = x;
//     } else if (sum == max) {
//       if (answer < x) {
//         answer = x;
//       }
//     }
//   }

//   return answer;
// }

// let arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(arr));
