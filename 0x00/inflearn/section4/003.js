function solution(test) {
  let answer = 0;
  let m = test.length;
  let n = test[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let q = 0; q < n; q++) {
          if (test[k][q] == i) pi = q;
          if (test[k][q] == j) pj = q;
        }
        if (pi < pj) cnt++;
      }
      if (cnt == m) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

//젼혀모르겠음
