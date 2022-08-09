const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);
input = input.sort((a, b) => a - b);
solution(input);
function solution(input) {
  var 합 = 0;
  for(let i =0; i<input.length; i++) {
    g
  }
}
