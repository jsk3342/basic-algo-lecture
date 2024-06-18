function solution(t, arr) {
  let cnt = 0;
  for (let num of arr) {
    if (num % 10 == t) cnt++;
  }
  return cnt;
}

let arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
