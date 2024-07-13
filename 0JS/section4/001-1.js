console.time();

function solution(arr) {
  let answer = 0;
  let maxSum = 0;
  for (let num of arr) {
    const sum = num
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b);
    maxSum = Math.max(sum, maxSum);
    if (maxSum === sum) {
      answer = Math.max(answer, num);
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));

console.timeEnd();
