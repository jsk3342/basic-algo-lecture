const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((i) => +i);

console.log("시작 인풋", input);
<<<<<<< HEAD
=======
const A = input[0]
const B = input[1]
const C = input[2]

const arr = [(A+B)%C, ((A%C) + (B%C))%C, (A*B)%C,  ((A%C) * (B%C))%C]
const arrjo = arr.join("\n")
console.log(arrjo)
>>>>>>> a755a839894382babbb38b429e62f4bc7adf6bd1
