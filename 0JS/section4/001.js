function solution(n, arr) {
  let answer = 0;
  let maxSum = 0;

  for (let num of arr) {
    const numStr = num.toString();
    let digitSum = 0;

    for (let char of numStr) {
      digitSum += parseInt(char);
    }

    if (digitSum > maxSum || (digitSum === maxSum && num > answer)) {
      answer = num;
      maxSum = digitSum;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
