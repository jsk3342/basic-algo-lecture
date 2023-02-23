const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);

console.log("시작 인풋", input);
const N = input[0]
let 기준 = 1
let test = 1

while (기준 % N === 0) {
  기준 = 기준*10 +1
  test++
}
console.log(test)