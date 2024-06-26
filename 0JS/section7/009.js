function solution(times) {
  const timeTable = Array(72).fill(0);
  for (let [start, end] of times) {
    for (let i = start; i < end; i++) {
      timeTable[i]++;
    }
  }

  return Math.max(...timeTable);
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
