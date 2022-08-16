function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let tmp = x;
    let sum = "";
    while (tmp) {
      sum += String(tmp % 10);
      tmp = Math.floor(tmp / 10);
    }
    sum = +sum;
    if (isPrime(sum)) answer.push(sum);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

for (let i = 0; i < 10; i++) {
  if (i == 2) {
    console.log("진입", i);
    i++;
    console.log(i);
  }
  console.log("반복문 끝난 ", i);
}
// function isPrime(num) {
//   if (num === 1) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function solution(arr) {
//   let answer = [];
//   for (let x of arr) {
//     let tmp = x;
//     let sum = "";
//     while (tmp) {
//       sum += String(tmp % 10);
//       tmp = Math.floor(tmp / 10);
//     }
//     sum = +sum;
//     if (isPrime(sum)) answer.push(sum);
//   }

//   return answer;
// }

// let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr));
