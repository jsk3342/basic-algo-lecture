function recursion(a, b, c) {
  if (b == 1) return a % c;
  let val = recursion(a, Math.floor(b / 2), c);
  val = (val * val) % c;
  if (b % 2 === 0) return val;
  return (val * a) % c;
}

console.log(recursion(10, 11, 12)); // 출력: 4
