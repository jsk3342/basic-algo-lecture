function solution(N, M, tests) {
  let count = 0;

  for (let mentor = 1; mentor <= N; mentor++) {
    for (let mentee = 1; mentee <= N; mentee++) {
      if (mentor === mentee) continue;

      let canMentor = true;
      for (let k = 0; k < M; k++) {
        let mentorRank = tests[k].indexOf(mentor);
        let menteeRank = tests[k].indexOf(mentee);

        if (mentorRank > menteeRank) {
          canMentor = false;
          break;
        }
      }

      if (canMentor) count++;
    }
  }

  return count;
}

// Example usage:
let N = 4;
let M = 3;
let tests = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(N, M, tests)); // Output: 3
