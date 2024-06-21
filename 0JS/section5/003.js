function solution(m, arr) {
  let answer = 0;
  let left = 0;
  let right = 0;
  let n = arr.length;
  let sum = 0;
  while (left < n && right < n) {
    if (sum < m) {
      sum += arr[right++];
    }
    if (sum == m) {
      answer++;
      sum -= arr[left++];
    }
    if (sum > m) {
      sum -= arr[left++];
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
