function solution(day, arr) {
  let count = 0;
  var arr1 = arr.map(i => Number((i + "")[1]));
  for (let x of arr1) {
    if (x == day) count++;
  }
  return count;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
