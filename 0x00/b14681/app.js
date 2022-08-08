const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input.map(Number);
const a = input[0];
const b = input[1];

solution(a, b);

function solution(a, b) {
  if (a > 0 && b > 0) {
    console.log(1);
  } else if (a < 0 && b > 0) {
    console.log(2);
  } else if (a < 0 && b < 0) {
    console.log(3);
  } else if (a > 0 && b < 0) {
    console.log(4);
  }
}
