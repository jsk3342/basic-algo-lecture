function solution(str, target) {
  const len = str.length;
  const arr = Array(len).fill(Number.MAX_SAFE_INTEGER);

  let left = 0;
  for (let i = 0; i < len; i++) {
    if (str[i] == target) {
      left = 0;
    } else {
      left++;
    }
    arr[i] = Math.min(left, arr[i]);
  }

  let right = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (str[i] == target) {
      right = 0;
    } else {
      right++;
    }
    arr[i] = Math.min(right, arr[i]);
  }
  return arr.join(" ");
}

let str = "teachermode";
console.log(solution(str, "e"));
