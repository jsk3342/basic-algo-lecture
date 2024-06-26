function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => a[1] - b[1]);
  console.log(meeting);
  let endPoint = 0;
  for (let i = 0; i < meeting.length; i++) {
    const [start, end] = meeting[i];
    if (start >= endPoint && endPoint < end) {
      answer++;
      endPoint = end;
    }
  }

  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
