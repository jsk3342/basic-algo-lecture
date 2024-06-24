function solution(s) {
  let answer = 0;
  const stk = [];
  for (let i = 0; i < s.length; i++) {
    if (c == "(") {
      stk.push(c);
    } else {
      stk.pop();
      if (s[i - 1] == "(") {
        answer += stk.length;
      } else {
        answer++;
      }
    }
  }

  return answer;
}

let a = "(((()(()()))(())()))(()())";
// let a = "()(((()())(())()))(())";

console.log(solution(a));
