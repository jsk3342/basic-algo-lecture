const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(i => +i);

console.log("μμ μΈν", input);

console.log(input[0] + input[1]);
