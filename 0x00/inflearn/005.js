function solution(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    if (min == undefined || min > arr[i]) min = arr[i];
  }
  console.log(min);
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
