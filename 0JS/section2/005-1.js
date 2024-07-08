function solution(arr) {
  const grade = Array(arr.length).fill(1);
  console.log(grade);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) grade[i]++;
      if (arr[i] > arr[j]) grade[j]++;
    }
  }
  return grade;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
