function solution(s) {
  let answer = 0;
  const stk = [];
  let cut = true;
  for (let c of s) {
    if (c == ")" && stk[stk.length - 1] == "(" && cut) {
      stk.pop();
      answer += stk.length;
      cut = false;
    } else if (c == ")" && stk[stk.length - 1] == "(") {
      stk.pop();
      answer++;
    } else {
      stk.push(c);
      cut = true;
    }
  }

  return answer;
}

let a = "(((()(()()))(())()))(()())";
// let a = "()(((()())(())()))(())";

console.log(solution(a));
