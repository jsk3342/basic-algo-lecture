function solution(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      console.log(j);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr)); // [5, 7, 11, 13, 15, 23]
