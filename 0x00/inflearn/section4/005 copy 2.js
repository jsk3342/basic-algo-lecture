function solution(X, Y) {
  var answer = "";
  var 중복체크 = [];
  var 엑스 = X.split("");
  var 와이 = Y.split("");

  for (let i = 0; i < X.length; i++) {
    for (let j = 0; j < Y.length; j++) {
      if (X[i] === Y[j]) {
        let 엑스갯수 = 엑스.filter((v) => v == X[i]);
        let 와이갯수 = 와이.filter((v) => v == Y[j]);
        console.log(엑스갯수, 와이갯수);
        if (엑스갯수 == 와이갯수) 중복체크.push(X[i]);
      }
    }
  }
  console.log(중복체크);
  return answer;
}

let X = "12321";
let Y = "42531";
console.log(solution(X, Y));
