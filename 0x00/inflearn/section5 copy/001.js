function solution(arr1, arr2) {
  let answer = [];
  let m = arr1.length;
  let n = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < m && p2 < n) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++]);
    } else if (arr1[p1] > arr2[p2]) {
      answer.push(arr2[p2++]);
    }
  }
  while (p1 < m) answer.push(arr1[p1++]);
  while (p2 < n) answer.push(arr2[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
