function solution(arr) {
  let mx = 100;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      sum += arr[i];
      if (mx > arr[i]) mx = arr[i];
    }
  }

  return [sum, mx];
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
