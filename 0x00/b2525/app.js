const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input.map(i => i.split(" ").map(Number));
var 시간 = input[0][0];
var 분 = input[0][1];
var 조리시간 = input[1][0];

분 += 조리시간;

while (분 >= 60) {
  시간 += 1;
  if (시간 >= 24) {
    시간 = 0;
  }
  분 -= 60;
}

console.log(시간, 분);
