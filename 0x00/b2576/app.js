const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);
input = input.sort((a, b) => a - b);
solution(input);

function solution(input) {
  var result = 0;
  var 최솟값 = 0;
  var 결과 = input.map(i => {
    if (i % 2 == 1) {
      result += i;
    }
  });

  if (result == 0) {
    result = -1;
  }

  console.log(result);
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 == 1) {
      최솟값 = input[i];

      console.log(최솟값);
      return;
    }
  }
}
