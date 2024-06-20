function solution(arr) {
  const answer = [];

  for (let num of arr) {
    let reversedNum = "";

    while (num > 0) {
      reversedNum += num % 10;
      num = Math.floor(num / 10);
    }

    reversedNum = parseInt(reversedNum);

    if (isPrime(reversedNum)) {
      answer.push(reversedNum);
    }
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr)); // [23, 2, 5, 7, 2, 3]
