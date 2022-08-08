const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
console.log(input);

const chess = [1, 1, 2, 2, 2, 8];

let answer = input.map((i, index) => {
  return chess[index] - i;
});

console.log(...answer);

//접근 방법은 맞았는데 코드를 구현하는 방법이 달랐다. 구현 능력을 끌어올리자