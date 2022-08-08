//N이 제곱수이면1을 반환하고 제곱수가 아니면 0을 반환하는 함수 작성. N은 10억 이하의 자연수

function solution(num) {
  var result = 0;
  for (let i = 0; i < num; i++) {
    if (i * i === num) result = 1;
  }
  return result;
}

solution(9);
