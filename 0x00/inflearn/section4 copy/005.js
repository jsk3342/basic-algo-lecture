function solution(n, k, card) {
  let answer = 0;
  card.sort((a, b) => b - a);
  let arr = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let q = j + 1; q < n; q++) {
        arr.push(card[i] + card[j] + card[q]);
      }
    }
  }
  answer = arr[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
