function solution(s) {
  let answer = "";
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      if (count !== 1) {
        answer += s[i] + count;
        count = 1;
      } else answer += s[i];
    } else count++;
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
