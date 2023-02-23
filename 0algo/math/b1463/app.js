const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((i) => +i);

console.log("시작 인풋", input[0]);
const X = input[0]

if (X % 3 === 0) {
  return X / 3
}

if (X % 2 === 0) {
  return X / 2
}

X - 1 