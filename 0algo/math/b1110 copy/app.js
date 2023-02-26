const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0].split(" ").map(Number);

solution(+input[0]);

function solution(N) {
  let makeNum = N;
  let count = 0;
  while (makeNum !== N || count === 0) {
    let ten;
    let one;
    if (makeNum >= 10) {
      ten = +String(makeNum)[0];
      one = +String(makeNum)[1];
    } else {
      ten = 0;
      one = +String(makeNum)[0];
    }
    makeNum = ten + one;
    let makeNumOne;
    if (makeNum >= 10) {
      makeNumOne = +String(makeNum)[1];
    } else {
      makeNumOne = +String(makeNum)[0];
    }
    makeNum = +(String(one) + String(makeNumOne));
    count++;
  }
  console.log(count);
}
