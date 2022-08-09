const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
var length = +input[0];

for (let i = 1; i < length + 1; i++) {
  var testCase1 = input[i].split(" ").map(Number);
  var 학생수 = testCase1[0];
  var sum = 0;
  var 점수배열 = [];
  for (let j = 1; j < 학생수 + 1; j++) {
    점수배열.push(testCase1[j]);
    sum += testCase1[j];
  }
  var avg = sum / 학생수;

  var count = 0;
  점수배열.forEach(i => {
    if (i > avg) {
      count++;
    }
  });

  var result = ((count / 학생수) * 100).toFixed(3) + "%";

  console.log(result);
}

// var testCase1 = input[1].split(" ").map(Number);
// var 학생수 = testCase1[0];
// var sum = 0;
// var 점수배열 = [];
// for (let i = 1; i < 학생수 + 1; i++) {
//   점수배열.push(testCase1[i]);
//   sum += testCase1[i];
// }
// var avg = sum / 학생수;

// var count = 0;
// 점수배열.forEach(i => {
//   if (i > avg) {
//     count++;
//   }
// });

// var result = (count / 학생수) * 100 + "%";

// console.log(result);
