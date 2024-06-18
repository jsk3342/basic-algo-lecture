function solution(str) {
  const len = str.length;
  return len % 2 == 0
    ? str[Math.floor(len / 2)] + str[Math.ceil(len / 2)]
    : str[Math.floor(len / 2)];
}

console.log(solution("good"));
