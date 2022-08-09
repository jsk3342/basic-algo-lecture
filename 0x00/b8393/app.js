const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0].split(" ").map(Number);

var x = input[0];
var sum = 0;
for (let i = 1; i < x + 1; i++) {
  sum += i;
}

console.log(sum);
