function solution(str) {
  answer = "";
  for (let x of str) {
    if (!isNaN(x)) {
      answer += x;
    }
  }
  console.log(+answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
