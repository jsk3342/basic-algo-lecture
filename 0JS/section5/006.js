function solution(s) {
  let answer = "";
  const obj = {};
  let mx = 0;
  s.split("").forEach((x) => {
    if (!obj[x]) obj[x] = 1;
    else obj[x]++;
  });
  for (let [key, value] of Object.entries(obj)) {
    if (mx < value) {
      mx = value;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
