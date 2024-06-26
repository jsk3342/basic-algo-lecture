function solution(times) {
  const event = [];
  for (let [s, e] of times) {
    event.push([s, "start"]);
    event.push([e, "end"]);
  }
  event.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] === "end" ? -1 : 1;
    }
    return a[0] - b[0];
  });
  let answer = 0;
  let cnt = 0;
  for (let [_, target] of event) {
    if (target == "start") cnt++;
    else cnt--;
    answer = Math.max(cnt, answer);
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
