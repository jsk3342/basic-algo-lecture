const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

class Stack {
  constructor() {
    this.arr = [];
    this.length = 0;
  }
  push(data) {
    this.arr.push(data);
    this.length += 1;
  }
  pop(index) {
    if (index > this.arr.length - 1) {
      this.length -= 1;
      return this.arr.pop();
    }
    let result = this.arr.splice(index, 1);
    return result;
  }
  top() {
    if (this.arr.length !== 0) {
      return this.arr[this.arr.length - 1];
    } else -1;
  }
  size() {
    return this.arr.length;
  }
  empty() {
    if (this.arr.length !== 0) {
      return 0;
    } else 1;
  }
}

var stack = new Stack();
let length = +input[0];

for (let i = 1; i < length; i++) {
  var 명령어배열 = input[i].split(" ");
  var 메소드 = 명령어배열[0];
  var 입력데이터;
  if (메소드 == "push") {
    입력데이터 = +명령어배열[1];
  } else {
    입력데이터 = null;
  }

  if (메소드 == "push") {
    stack.push(입력데이터);
    // console.log(stack.push(입력데이터));
  } else if (메소드 == "top") {
    stack.top();
    // console.log(stack.top());
  } else if (메소드 == "size") {
    stack.size();
    // console.log(stack.size());
  } else if (메소드 == "pop") {
    stack.pop();
    // console.log(stack.pop());
  } else if (메소드 == "empty") {
    stack.empty();
    // console.log(stack.empty());
  }

  console.log(stack);
}
