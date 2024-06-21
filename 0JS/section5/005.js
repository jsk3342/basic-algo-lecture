function solution(k, arr) {
  let answer = 0;
  let lt = 0,
    rt = 0,
    sum = 0;
  while (rt < arr.length) {
    sum += arr[rt++];
    if (rt - lt == k) {
      answer = Math.max(answer, sum);
      sum -= arr[lt++];
    }
  }

  return answer;
}
let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
