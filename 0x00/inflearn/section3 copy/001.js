function solution(s) {
  let answer = "Yes";
  let 소문자 = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (소문자[i] !== 소문자[s.length - 1 - i]) {
      answer = "No";
    }
  }

  return answer;
}

let str = "goooG";
console.log(solution(str));
