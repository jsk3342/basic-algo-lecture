function solution(a, b, c) {
  let answer = "YES";
  let tot = a + b + c;
  let mx = 0;
  if (a > b) mx = a;
  else mx = b;
  if (c > mx) mx = c;

  if (tot - mx > mx) {
    console.log(answer);
  } else {
    answer = "NO";
    console.log(answer);
  }
}

solution(6, 7, 11);
solution(13, 33, 17);
