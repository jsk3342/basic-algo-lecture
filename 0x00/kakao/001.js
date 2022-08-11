function solution(numbers) {
  var answer = 0;
  var arr = new Array(10).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(numbers[i]) === -1) {
      arr[numbers[i]] = numbers[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      answer += i;
      console.log("이건 아마 계속", answer);
    }
  }
  console.log(arr);
  return answer;
}

const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

solution(numbers);
