function solution(s) {
  let answer;
  answer = s.filter((e, i) => (s.indexOf(e) === i ? true : false));
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
