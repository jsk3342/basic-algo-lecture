//1 || num으로만 나눠지는 수

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

console.log(isPrime(5));
