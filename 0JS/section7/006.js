function solution(arr) {
  const n = arr.length - 2;
  let hyun = arr[0];
  let pair = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] > arr[i]) hyun = i;
    if (arr[i] > arr[i + 1]) pair = i + 2;
  }
  return [hyun, pair];
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
