function solution(N) {
  if (N == 1) return 1;
  return N + solution(N - 1);
}

console.log(solution(6));
console.log(solution(10));
