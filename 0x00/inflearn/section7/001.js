// 선택 정렬 구현하기
// 1. 0번째 데이터를 추출한다.
// 2. 1번째 데이터와 비교하여 크면 오른쪽, 작으면 왼쪽을 반복한다.
// 3. 2번째도 동일

function solution(arr) {
  let answer = [];
  let arr1 = arr;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(i !== j) {
        if(arr1[i] < arr1[j]) {
          let tmp1 = arr1[i]
          let tmp2 = arr1[j]
          console.log('i',arr1[i])
          console.log('j', arr1[j])
          arr1[i] = tmp2;
          arr1[j] = tmp1;
          console.log(arr1)
        }
      }
    }
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

// 5 13 11 7 23 15
// 5 11 13 7 23 15
// 5 11 7 13 23 15
// 5 11 7 13 23 15
// 5 11 7 13 23 15

// 5 13 11 7 23 15
// 5 13 11 7 23 15
// 5 13 11 7 23 15
// 5 13 11 7 23 15
// 5 13 11 7 23 15

// 5 11 13 7 23 15
// 5 7 11 13 23 15
// 5 7 11 13 23 15
// 5 7 11 13 23 15
// 5 7 11 13 23 15

// 5 7 11 13 23 15
// 5 7 11 13 23 15
// 5 7 11 13 23 15
// 5 7 11 13 23 15
// 5 7 11 13 23 15


