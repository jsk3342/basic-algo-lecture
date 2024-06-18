function solution(str) {
  let answer = "";
  for (let c of str) {
    if (c == "A") answer += "#";
    else answer += c;
  }

  return answer;
}

let str = "BANANA";
console.log(solution(str));
