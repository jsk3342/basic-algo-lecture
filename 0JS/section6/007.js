function solution(need, plan) {
  const arr = [...plan].filter(subject => need.includes(subject));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != need[i]) {
      return "NO";
    }
  }
  return "YES";
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b)); // "NO"
