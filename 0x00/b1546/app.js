const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
var a = Number(input[0]);
var arr = input[1].split(" ").map(Number);
var maxNum = Math.max(...arr);
var result = 0;
var arrResult = arr.map(i => (result += (i / maxNum) * 100));
console.log(result / a);
