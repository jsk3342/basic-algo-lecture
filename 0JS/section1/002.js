function solution(a, b, c) {
  let answer = "YES";
  let tmp = 0;
  if (a > b) {
    tmp = b;
    b = a;
    a = tmp;
  }
  if (b > c) {
    tmp = c;
    c = b;
    b = tmp;
  }

  if (a + b > c) {
    console.log(answer);
  } else {
    answer = "NO";
    console.log(answer);
  }
}

solution(6, 7, 11);
solution(13, 33, 17);
