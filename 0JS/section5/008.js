function solution(s, t) {
  let answer = 0;
  let sh = new Map();
  let wh = new Map();
  let k = t.length;
  for (let c of t) {
    if (sh.has(c)) {
      sh.set(c, sh.get(c) + 1);
    } else {
      sh.set(c, 1);
    }
  }

  for (let i = 0; i < k; i++) {
    if (wh.has(s[i])) {
      wh.set(s[i], sh.get(s[i] + 1));
    } else {
      wh.set(s[i], 1);
    }
  }

  let isSame = true;
  for (let [key, value] of sh) {
    if (sh[key] != wh[key]) isSame = false;
  }
  if (isSame) answer++;

  for (let rt = k; rt < s.length; rt++) {
    if (wh.get(s[rt - t] == 0)) {
      wh.delete(s[rt - t]);
    } else {
      wh.set(s[rt - t], wh.get(s[rt - t] - 1));
    }

    if (wh.has(s[rt])) {
      wh.set(s[rt], wh.get(s[rt] + 1));
    } else wh.set(s[rt], 0);
    console.log(wh);
    let isSame = true;
    for (let [key, value] of wh) {
      if (sh[key] != wh[key]) isSame = false;
    }
    
    if (isSame) {
      console.log(sh, wh);
      answer++;
    }
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
