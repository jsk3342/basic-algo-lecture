function solution(n) {
  if (n < 1) return "";
  let answer = "";
  answer += n % 2;
  n = parseInt(n / 2);

  return answer + solution(n);
}

console.log(solution(11));
