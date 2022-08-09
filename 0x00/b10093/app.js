const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
var a = input[0];
var b = input[1];

solution(a, b);

function solution(a, b) {
  var 갯수 = (a === b) ? 0 : b - a - 1;
  var 사이정수배열 = [];
  for (let i = 0; i < 갯수; i++) {
    사이정수배열.push(a + i + 1);
  }
  console.log(갯수);
  console.log(...사이정수배열);
}
