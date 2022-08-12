function solution(s) {
  var answer = "Yes";
  var ss = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (ss[i] !== ss[s.length - 1 - i]) {
      return "No";
    }
  }

  return answer;
}

let str = "goooG";
console.log(solution(str));
