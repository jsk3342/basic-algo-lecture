function solution(arr) {
  const positive = [];
  const negative = [];
  for (let num of arr) {
    if (num > 0) positive.push(num);
    else negative.push(num);
  }
  return negative.concat(positive);
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
