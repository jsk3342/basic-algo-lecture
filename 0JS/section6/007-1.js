function solution(need, plan) {
  let queue = need.split("");
  for (let x of plan) {
    if (need.includes(x)) {
      if (x != queue.shift()) return "NO";
    }
  }
  return queue.length > 0 ? "NO" : "YES";
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
