function solution(s) {
  let answer = "";
  let max = 0;
  for (let x of s) {
    if (max < x.length) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
