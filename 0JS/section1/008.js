function solution(arr) {
  const total = arr.reduce((a, b) => a + b);
  const answer = arr;

  for (let i = 0; i < 7; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (total - (arr[i] + arr[j]) == 100) {
        answer[i] = -1;
        answer[j] = -1;
        return answer.filter((v) => v != -1);
      }
    }
  }
  return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
