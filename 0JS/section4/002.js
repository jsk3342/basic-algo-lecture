function solution(arr) {
  const answer = [];
  for (let num of arr) {
    let digitSum = "";
    while (num > 0) {
      digitSum += num % 10;
      num = Math.floor(num / 10);
    }
    digitSum = parseInt(digitSum);

    let isSo = true;
    for (let i = 2; i < digitSum; i++) {
      if (digitSum === 1 || digitSum % i === 0) {
        console.log(digitSum);
        isSo = false;
        break;
      }
    }

    if (isSo) answer.push(digitSum);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
