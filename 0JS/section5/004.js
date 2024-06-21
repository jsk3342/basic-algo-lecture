function solution(m, arr) {
  let answer = 0;
  let n = arr.length;
  let left = (right = 0);

  let sum = arr[0];
  while (left < n && right < n) {
    if (sum <= m) {
      console.log(left, right, sum);
      answer++;
      sum += arr[right++];
    } else if (sum > m) {
      sum = arr[left++];
      right = left;
    }
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
