const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");
input = input.map(Number).map(i => i.toString());
var arrA = +input[0];
var arrB = input[1].split("");

var one = +arrB[2];
var ten = +arrB[1];
var hun = +arrB[0];

console.log(arrA * one);
console.log(arrA * ten);
console.log(arrA * hun);
console.log(arrA * +input[1]);

// var 자리수쪼개기 = arrA.map((item, index) => {
//   if (index === 0) {
//     return item * 100;
//   } else if (index === 1) {
//     return item * 10;
//   } else if (index === 2) {
//     return +item;
//   }
// });

// var 삼번더하기 = 0;
// var 사번더하기 = 0;
// var 오번더하기 = 0;
// 자리수쪼개기.forEach(i => {
//   삼번더하기 = 삼번더하기 + i * arrB[2];
// });
// 자리수쪼개기.forEach(i => {
//   사번더하기 = 사번더하기 + i * arrB[1];
// });
// 자리수쪼개기.forEach(i => {
//   오번더하기 = 오번더하기 + i * arrB[0];
// });

// console.log(삼번더하기);
// console.log(사번더하기);
// console.log(오번더하기);
// console.log(삼번더하기+사번더하기*10+오번더하기*100);
