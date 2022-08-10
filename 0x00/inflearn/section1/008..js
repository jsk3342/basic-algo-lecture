function solution(arr) {
  // 1. 싹다 더한다
  // 2. 더한거에 100 뺸다
  // 3. 그 값을 두개 더했을 때 찾는다
  // 4. 그거 뺴고 출력한다
  let answer = arr;

  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  let 결과 = sum - 100;
  console.log(sum, 결과)
  for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (arr[i] + arr[j] == 결과) {
        answer.splice(answer.indexOf(arr[i]), 1);
        answer.splice(answer.indexOf(arr[j]), 1);
      }
    }
  }
  return answer;
}

console.log(solution(arr));
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];