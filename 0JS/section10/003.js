function solution(arr) {
  const dy = Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let t = 0;
    for (let j = i - 1; j >= 0; j--) {
      console.log(arr[i], arr[j]);
      if (arr[i] > arr[j]) {
        t = Math.max(t, dy[j]);
      }
    }
    dy[i] = t + 1;
  }
  console.log(dy);
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
