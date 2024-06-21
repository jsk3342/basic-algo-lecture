function solution(n, k, card) {
  const arr = [];
  for (let i = 0; i < card.length - 2; i++) {
    for (let j = i + 1; j < card.length - 1; j++) {
      for (let k = j + 1; k < card.length; k++) {
        arr.push(card[i] + card[j] + card[k]);
      }
    }
  }
  arr.sort((a, b) => b - a);
  return arr[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
