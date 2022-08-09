const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0].split(" ").map(Number);

var hour = input[0];
var min = input[1];

solution(hour, min);

function solution(hour, min) {
  min -= 45;
  if (min < 0) {
    min += 60;
    hour -= 1;
  }
  if (hour < 0) {
    hour = 23;
  }
  console.log(hour, min);
}
