const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);
function solution(arr) {
  let answer = arr;
  let truth;
  let sum = arr.reduce((a, b) => a + b, 0);
  let 결과 = sum - 100;
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        truth = input
          .filter((_, k) => k != i && k != j)
          .sort((a, b) => a - b);
      }
    }
  }
  return truth.join("\n");
}

console.log(solution(input));
