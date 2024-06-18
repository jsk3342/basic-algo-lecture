function solution(str, C) {
  let answer = 0;
  for (let c of str) {
    if (c == C) answer++;
  }

  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
