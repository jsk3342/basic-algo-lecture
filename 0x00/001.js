//N 이하의 자연수 중에서 3의 배수이거나 5의 배수인 수를 모두 합한 값을 반환하는 함수를 작성하라, N은 10만 이하의 자연수이다.

//10만 이하는 O(1), 또는 O(logN)으로 풀어야 한다. 일단 O(n)으로 풀어보기

var num = 16;

function solution(num) {
  var result = 0;
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  return result;
}

solution(num);