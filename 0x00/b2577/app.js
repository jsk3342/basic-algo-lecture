const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input.map(Number);
var result = input[0] * input[1] * input[2] + "";
var sortArr = result.split("").sort((a, b) => a - b);
sortArr = sortArr.map(Number);
var num = "0123456789";
var arr = new Array(10).fill(0);

sortArr.forEach(i => (arr[num.indexOf(i)] += 1));

console.log(arr.join(" "));
