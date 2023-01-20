// function solution(a, b, c) {
//   let long;
//   let shot;
//   if (a > b) long = a;
//   else long = b;

//   if (b > c) long = b;
//   else long = c;

//   if (long == a) shot = b + c;
//   if (long == b) shot = a + c;
//   if (long == c) shot = a + b;
//   console.log(long, shot);
//   if (long < shot) return "Yes";
//   else return "No";
// }

function solution(a, b, c) {
  let long;
  let sum = a + b + c;
  if (a > b) long = a;
  else long = b;

  if (b > c) long = b;
  else long = c;

  if (sum - long > long) return "Yes";
  else return "No";
}

console.log(solution(13, 33, 17));
