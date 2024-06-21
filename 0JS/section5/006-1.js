function solution(s) {
  let answer = "";
  const sh = new Map();
  for (let c of s) {
    if (!sh.has(c)) {
      sh.set(c, 1);
    } else {
      sh.set(c, sh.get(c) + 1);
    }
  }
  let mx = Number.MIN_SAFE_INTEGER;
  for (let [key, value] of sh) {
    if (mx < value) {
      answer = key;
      mx = value;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
