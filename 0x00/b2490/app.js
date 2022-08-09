const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
var a = input[0].split(" ").map(Number);
var b = input[1].split(" ").map(Number);
var c = input[2].split(" ").map(Number);

solution(a);
solution(b);
solution(c);

function solution(arr) {
  var 판단 = 0;
  arr.forEach(element => {
    if (element == 1) {
      판단 += 1;
    }
  });
  if (판단 == 0) {
    console.log("D");
  } else if (판단 == 1) {
    console.log("C");
  } else if (판단 == 2) {
    console.log("B");
  } else if (판단 == 3) {
    console.log("A");
  } else if (판단 == 4) {
    console.log("E");
  }
}
