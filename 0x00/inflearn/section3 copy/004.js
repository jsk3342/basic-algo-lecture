// function solution(s, t) {
//   let answer = [];
//   let arr = new Array(s.length).fill(0);
//   let 찾는값 = str.indexOf("e");

//   for (let i = 0; i < s.length; i++) {
//     if (s[i]);
//   }

//   return answer;
// }

// let str = "teachermode";
// console.log(solution(str, "e"));

// 풀이 방법
// 1. 기준 단어를 찾는다
// 2. 인덱스오브를 이용하여 인덱스 위치를 찾는다
// 3. 만약 기준단어 왼쪽에 있으면 기준단어 인덱스 - 현위치 단어
// 4. 오른쪽ㅇ이면 현단어 위치 - 기준단어
// 5. 서로 값 비교해서 적은 값으로 대체 한다

// 풀이 방법
// 1. 좌우로 반복문 돈다

function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t) {
      p++;
    } else {
      p = 0;
    }
    answer.push(p);
  }

  for (let i = s.length; i >= 0; i--) {
    if (s[i] !== t) {
      p++;
    } else {
      p = 0;
    }
    if (p < answer[i]) answer[i] = p;
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
