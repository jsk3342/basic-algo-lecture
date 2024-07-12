/** 
재귀함수로 데이터 출력
- 오브젝트면 프로퍼티 이름(title, amount)과 값을 출력
- 배열이면 값([10, 20, 30])을 출력하고 값을 누적
- 재귀 호출이 끝나면 누적한 값을 출력
*/

var member = {
  Jan: {
    item: {
      title: "js북",
      amount: 100,
    },
    point: [10, 20, 30],
  },
  Feb: {
    item: {
      title: "js북",
      amount: 200,
    },
    point: [40, 50, 60],
  },
};

function solution(member) {
  function DFS(obj) {
    if (typeof obj !== "object") return obj;
    if (Array.isArray(obj)) {
      console.log(
        obj,
        obj.map(Number).reduce((a, b) => a + b)
      );
      return;
    } else {
      for (let key of Object.keys(obj)) {
        DFS(obj[key]);
        console.log(obj[key]);
      }
      return;
    }
  }

  DFS(member);
}

console.log(solution(member));

// function solution(member) {
//   for (let [key, value] of Object.entries(member)) {
//     for (let [innerKey, innerValue] of Object.entries(value)) {
//       if (Array.isArray(innerValue)) {
//         console.log(
//           innerValue,
//           innerValue.map(Number).reduce((a, b) => a + b)
//         );
//       } else {
//         console.log(innerKey, innerValue);
//       }
//     }
//   }
// }

// console.log(solution(member));
