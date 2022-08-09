const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0].split(" ").map(Number);

var x = input[0];
for (let i = 0; i < x; i++) {
  var star = 1 + i;
  var line = x - star;
  var print = "";
  for (let j = 0; j < line; j++) {
    print += " ";
  }
  for (let s = 0; s < star; s++) {
    print += "*";
  }
  console.log(print);
}
