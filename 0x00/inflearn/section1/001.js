function solution(a, b, c) {
  if (a > b) {
    if (b > c) {
      return c;
    } else return b;
  } else if (a < b) {
    if (a > c) {
      return c;
    } else return a;
  } 
}

console.log(solution(2, 5, 1));
