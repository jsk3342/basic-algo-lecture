const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input.map(i => i.split(" ").map(Number));

var leg = +input[0];

for (let i = 1; i < leg + 1; i++) {
  var test1 = input[i];
  if (test1[0] !== 0 && test1[1] !== 0) {
    console.log(test1[0] + test1[1]);
  }
}
