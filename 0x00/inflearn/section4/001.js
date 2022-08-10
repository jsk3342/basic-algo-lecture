function solution(n, arr) {
  let answer;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let 합 = arr[i].split("").reduce((a, b) => a + b, 0);
    console.log(합);
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
