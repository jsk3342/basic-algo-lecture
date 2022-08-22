function solution(n) {
  var answer = [-1, -1];
  var arr = [];
  var arr2 = [];

  while (n % 2 === 0) {
    arr.push(2);
    n = n / 2;
  }
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      arr.push(i);
      n = n / i;
    }
  }

  if (n > 2) arr.push(n);

  for (let x of arr) {
    arr2.push(x);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (
        i !== j &&
        isPrime(arr[i]) &&
        isPrime(arr[j]) &&
        isPrime(arr[i] * arr[j])
      ) {
        arr2.push(arr[i] * arr[j]);
      }
    }
  }

  arr2.sort((a, b) => a - b);
  console.log(arr2);
  for (let i = 0; i < arr2.length; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
      if (i !== j && arr2[i] * arr2[j] === n) {
        answer[0] = arr2[i];
        answer[1] = arr2[j];
      }
    }
  }

  return answer;
}

const isPrime = num => {
  if (num === 1) return false;
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
};

var n = 6;
solution(n);
