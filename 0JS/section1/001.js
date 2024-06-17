function solution(a, b, c) {
  let minNum = 101;
  const arr = [a, b, c];
  for (let i = 0; i < 3; i++) {
    minNum = Math.min(arr[i], minNum);
  }
  console.log(minNum);
  return minNum;
}

solution(6, 5, 11);
