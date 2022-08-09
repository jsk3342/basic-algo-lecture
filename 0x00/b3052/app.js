const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input.map(Number);
var result = input.map(i => i % 42);
var saveArr = [];

result.forEach(i => {
  if (saveArr.indexOf(i) === -1) {
    saveArr.push(i);
  }
});

console.log(saveArr.length);
console.log(saveArr);
