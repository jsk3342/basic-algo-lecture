const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
var 총금액 = +input[0];
var 총구매량 = +input[1];
var 영수증결제금액 = 0;

for (let i = 2; i < 총구매량 + 2; i++) {
  var 구매내역 = input[i].split(" ").map(Number);
  var 결제금액 = 구매내역[0];
  var 구매갯수 = 구매내역[1];
  영수증결제금액 += 결제금액 * 구매갯수;
}

if (총금액 === 영수증결제금액) {
  console.log("Yes");
} else console.log("No");
