function solution(m, arr) {
  let answer = 0,
    lt = 0,
    rt = 0,
    sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum < m) {
      sum += arr[rt];
      rt++;
    } else if (sum === m) {
      answer++;
      rt++;
    } else if (sum > m) {
      sum -= arr[lt];
      lt++;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
