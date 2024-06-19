function solution(str) {
  let answer = "YES";
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) answer = "NO";
  }
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
