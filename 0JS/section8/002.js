function solution(n) {
  let answer = "";
  while (n > 0) {
    answer += n % 2;
    n = parseInt(n / 2);
  }
  return answer;
}

console.log(solution(11));
