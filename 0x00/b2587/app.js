const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);
input = input.sort((a, b) => a - b);
solution(input);
console.log(input);
function solution(input) {
  var sum = 0;
  input.map(i => (sum += i));

  console.log(sum / 5);
  console.log(input[2]);
}
