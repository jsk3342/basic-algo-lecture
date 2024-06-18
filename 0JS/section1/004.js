function solution(N) {
  let answer = 0;
  for (let i = 1; i <= N; i++) {
    answer += i;
  }
  console.log(answer);
}

solution(6);
solution(10);
