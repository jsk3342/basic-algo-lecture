function solution(n, k) {
  const queue = Array(n)
    .fill()
    .map((_, i) => i + 1);

  let cnt = 0;
  while (queue.length > 1) {
    cnt++;
    let head = queue.shift();
    if (cnt != k) {
      queue.push(head);
    } else {
      cnt = 0;
    }
  }

  return queue.shift();
}

console.log(solution(8, 3));
