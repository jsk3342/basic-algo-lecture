function solution(s) {
  let answer = "YES";
  let revers = s.split("").reverse().join("");
  if (s !== revers) return "No";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
let str1 = str.toLowerCase();
str1 = str1.replace(/[^a-z]/g, "");

console.log(solution(str1));
