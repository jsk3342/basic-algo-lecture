function solution(m, coins) {
  let answer = 0;
  coins.sort((a, b) => b - a);
  for (let coin of coins) {
    let tmp = parseInt(m / coin);
    answer += tmp;
    m -= tmp * coin;
  }
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
