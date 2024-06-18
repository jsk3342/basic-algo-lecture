function solution(str) {
  let answer = str[0];
  for (let c of str) {
    if (answer.length < c.length) answer = c;
  }
  return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
