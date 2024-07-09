function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  while (queue.length) {
    const x = queue.shift();
    for (let nx of [x + 1, x + 5, x - 1]) {
      if (nx == e) return dis[x] + 1;
      if (nx >= 0 && nx <= 10001 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
}

console.log(solution(5, 14));
console.log(solution(8, 3));
