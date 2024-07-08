function solution(n, k) {
  let cnt = 0;
  while (n > 1) {
    if (n % k == 0) {
      n = n / k;
      cnt++;
    } else {
      n--;
      cnt++;
    }
  }
  return cnt;
}

console.log(solution(25, 4));
