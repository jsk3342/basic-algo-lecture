// 선택 정렬 구현하기
// 1. 0번째 데이터를 추출한다.
// 2. 1번째 데이터와 비교하여 크면 오른쪽, 작으면 왼쪽을 반복한다.
// 3. 2번째도 동일

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idk = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idk]) idk = j;
    }
    [arr[i], arr[idk]] = [arr[idk], arr[i]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
