function solution(str) {
  let answer = "";
  for (let c of str) {
    if (!answer.split("").includes(c)) answer += c;
  }
  return answer;
}

console.log(solution("ksekkset"));
