function solution(str) {
  let answer = "";
  for (let c of str) {
    if (c == c.toUpperCase()) answer += c.toLowerCase();
    else answer += c.toUpperCase();
  }
  return answer;
}

let str = "StuDY";
console.log(solution(str));
