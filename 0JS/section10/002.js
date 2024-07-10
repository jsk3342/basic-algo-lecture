function solution(n) {
  const arr = Array(n + 2).fill(0);
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n + 1];
}

console.log(solution(7));
