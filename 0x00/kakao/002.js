function solution(n) {
  var answer = 0;
  var 삼진법 = n
    .toString(3)
    .split("")
    .reverse()
    .reduce((a, b) => a + b);
  answer = 삼진법.toString(10);
  return answer;
}

var n = 45;
solution(n);
