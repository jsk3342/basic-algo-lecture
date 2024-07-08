function solution(s) {
  const stk = [];
  for (let c of s) {
    if (answer[answer.length - 1] == c) {
      stk.pop();
    } else {
      stk.push(c);
    }
  }

  return stk.length === 0 ? 1 : 0;
}

console.log(solution("baabaa"));

// function solution(s) {
//   let answer = "";
//   for (let c of s) {
//     if (answer[answer.length - 1] == c) {
//       answer = answer.slice(0, -1);
//     } else {
//       answer += c;
//     }
//   }

//   return answer.length === 0 ? 1 : 0;
// }

// console.log(solution("baabaa"));
