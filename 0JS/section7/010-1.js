function solution(target, arr) {
  arr.sort((a, b) => a - b); // 정렬
  let lt = 0;
  let rt = arr.length - 1;
  
  while (lt <= rt) {
    let p = lt + Math.floor((rt - lt) / 2); // 중간 인덱스 계산
    if (arr[p] === target) return p + 1; // 1-based index 반환
    else if (arr[p] > target) rt = p - 1; // 타겟이 중간값보다 작으면 rt를 중간값-1로 설정
    else lt = p + 1; // 타겟이 중간값보다 크면 lt를 중간값+1로 설정
  }
  return -1; // 타겟이 배열에 없는 경우 -1 반환
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr)); // 출력: 4
