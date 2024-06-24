function solution(s) {
  let answer = "YES";
  const stk = [];
  for (let c of s) {
    if (c == "(") stk.push(c);
    else {
      if (stk.length == 0) return "NO";
      stk.pop();
    }
  }
  return stk.length == 0 ? answer : "NO";
}
let a = "(()(()))(()";
console.log(solution(a));
