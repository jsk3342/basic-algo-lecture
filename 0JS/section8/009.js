function solution(m, coins) {
  coins.sort((a, b) => b - a);
  let answer = 0;
  for (let coin of coins) {
    answer += Math.floor(m / coin);
    m -= Math.floor(m / coin) * coin;
  }

  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
