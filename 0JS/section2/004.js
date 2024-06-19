function solution(arr) {
  let answer = 0;
  let acc = 0;
  for (let num of arr) {
    if (num) {
      acc++;
      answer += acc;
    } else acc = 0;
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
