function solution(m, songs) {
  let answer = 0;
  let lt = Math.max(...songs)
  let rt = songs.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = Math.floor(lt + rt) / 2;
    let sum = 0;
    let cnt = 0;
    for (let num of songs) {
      if (sum < mid) {
        sum += num;
      } else {
        cnt++;
        answer = Math.max(answer, sum);
        sum = num;
      }
    }
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
