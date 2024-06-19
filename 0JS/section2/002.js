function solution(arr) {
  let cnt = 0;
  let target = 0;
  
  for (let item of arr) {
    if(target < item) {
      cnt++;
      target = item;
    }
  }

  return cnt
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
