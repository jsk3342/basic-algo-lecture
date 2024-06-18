function solution(str) {
  const answer = [];
  for (let c of str) {
    if (!answer.includes(c)) answer.push(c);
  }
  return answer;
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
