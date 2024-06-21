function solution(arr1, arr2) {
  const answer = arr1
    .filter((x) => arr2.includes(x) && x)
    .sort((a, b) => a - b);

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
