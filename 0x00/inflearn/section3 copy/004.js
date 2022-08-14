function solution(arr, t) {
  let answer = [];
  let arr1 = arr.split("");
  let p = 1000;
  for (let i = 0; i < arr.length; i++) {
    if (t !== arr1[i]) {
      p++;
      answer.push(p);
    } else {
      p = 0;
      answer.push(p);
    }
  }

  for (let i = arr.length; i >= 0; i--) {
    if (t !== arr1[i]) {
      p++;
    } else {
      p = 0;
    }
    if (answer[i] > p) {
      answer[i] = p;
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
