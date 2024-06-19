function solution(arr) {
  const answer = arr.split("").map((v) => v.toLowerCase());
  while (answer.length > 0) {
    if (answer.shift() !== answer.pop()) {
      return "NO";
    }
  }
  return "YES";
}

let str = "goooG";
console.log(solution(str));
