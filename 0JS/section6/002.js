function solution(s) {
  let answer = "";
  const stk = [];
  for (let c of s) {
    if (c == "(") {
      stk.push(c);
    } else if (c == ")") {
      stk.pop();
    } else if (stk.length == 0) {
      answer += c;
    }
  }

  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
