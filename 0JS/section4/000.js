function solution() {
  let target = "543";

  for (let i = 0; i < target.length; i++) {
    console.log(target[i]);
  }
}

solution();

function solution2() {
  let target = 543;

  while (target > 0) {
    console.log(target % 10);
    target = parseInt(target / 10);
  }
}

solution2();
