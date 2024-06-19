function solution(str) {
  let answer = "";
  for (let c of str) {
    if (!isNaN(c)) answer += c;
  }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
