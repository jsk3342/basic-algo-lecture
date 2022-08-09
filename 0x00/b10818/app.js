const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const length = Number(input[0]);
let arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);
console.log(arr[0], arr[length - 1]);
