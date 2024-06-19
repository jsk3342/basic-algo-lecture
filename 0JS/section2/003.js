function solution(a, b) {
  const n = a.length;
  const answer = [];

  for (let i = 0; i < n; i++) {
    if (a[i] === 1 && b[i] === 3) answer.push("A");
    else if (a[i] === 3 && b[i] === 1) answer.push("B");
    else if (a[i] === b[i]) answer.push("D");
    else {
      if (a[i] < b[i]) answer.push("B");
      else answer.push("A");
    }
  }

  return answer.join(" ");
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
