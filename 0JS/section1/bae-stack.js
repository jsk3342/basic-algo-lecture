function solution(arr, mx) {
  const answer = Array.from({ length: 6 }, () => [0, 0]); // 6학년까지, 성별별 학생 수를 저장하는 배열
  let cnt = 0;

  for (let row of arr) {
    const [성별, 학년] = row;
    answer[학년 - 1][성별]++;
  }

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 2; j++) {
      if (answer[i][j] > 0) {
        cnt += Math.ceil(answer[i][j] / mx);
      }
    }
  }

  console.log(cnt);
}

const arr = [
  [0, 3],
  [1, 5],
  [0, 6],
];

solution(arr, 3);
