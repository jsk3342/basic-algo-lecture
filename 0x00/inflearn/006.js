function solution(arr) {
  let answer = [];
  let 홀수배열 = [];
  let sum = 0;
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      홀수배열.push(arr[i]);
    }
  }
  홀수배열.forEach(i => (sum += i));
  min = Math.min(...홀수배열);
  answer.push(sum);
  answer.push(min);

  return answer.join(" ");
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
