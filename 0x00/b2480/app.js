const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0].split(" ").map(Number);

input = input.sort((a, b) => a - b);
solution(input);

function solution(input) {
  var a = input[0];
  var b = input[1];
  var c = input[2];
  var result = 0;
  if (a == b && a == c) {
    result = 10000 + a * 1000;
  } else if (a == b || a == c || b == c) {
    a == b ? (result = 1000 + a * 100) : (result = 1000 + c * 100);
  } else {
    result = c * 100;
  }
  return console.log(result);
}
