function solution(target, arr) {
  arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;
  let p = Math.floor(rt / 2);
  console.log(p, arr);
  while (target !== arr[p]) {
    if (target < arr[p]) {
      rt = p;
      p = Math.floor((rt + lt) / 2);
    } else if (target > arr[p]) {
      lt = p;
      p = Math.floor((rt + lt) / 2);
    } else if (target == arr[p]) {
      p = target;
    }
  }
  return p + 1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
