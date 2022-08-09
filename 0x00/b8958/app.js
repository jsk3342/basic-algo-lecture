const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
var length = +input[0];

for (let i = 1; i < length + 1; i++) {
  var 문자대체 = input[i].replaceAll("X", 0).replaceAll("O", 1);
  var 숫자배열로변환 = 문자대체.split("").map(Number);
  var sum = 0;
  var count = 0;
  숫자배열로변환.map((i, index) => {
    if ((i == 숫자배열로변환[index + 1] && i == 1) || i == 1) {
      sum = sum + count + i;
      count++;
    } else if (i == 0) {
      count = 0;
    }
  });

  console.log(sum);
}

// var testCase1 = input[1];
// var 문자대체 = testCase1.replaceAll("X", 0).replaceAll("O", 1);
// var 숫자배열로변환 = 문자대체.split("").map(Number);
// var sum = 0;
// var count = 0;
// 숫자배열로변환.map((i, index) => {
//   if ((i == 숫자배열로변환[index + 1] && i == 1) || i == 1) {
//     sum = sum + count + i;
//     count++;
//   } else if (i == 0) {
//     count = 0;
//   }
// });

// console.log(sum);
