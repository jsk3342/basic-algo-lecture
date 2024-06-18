function solution(str) {
  const s = new Set();
  for (let c of str) {
    s.add(c);
  }
  return [...s].join("");
}

console.log(solution("ksekkset"));
