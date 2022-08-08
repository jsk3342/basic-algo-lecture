//N이하의 수 중에서 가장 큰 2의 거듭제곱수를 반환하는 함수를 작성하라. N은 10억 이하의 자연수이다.

function solution(num) {
  var result = 0;
  for (let i = 0; i < num; i++) {
    if (2 ** i <= num) result = 2 ** i;
  }
  return result;
}

solution(5);
