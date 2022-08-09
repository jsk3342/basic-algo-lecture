const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0].split(" ").map(Number);


var arr2 = input.sort((a,b)=> a-b)
console.log(...arr2);

// solution(a, b);

// function solution(a, b)
// }
