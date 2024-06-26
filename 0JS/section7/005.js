function solution(size, arr) {
  const memory = Array(size).fill(0);
  for (let num of arr) {
    memory.unshift(num);
    if (memory.lastIndexOf(num) != 0) {
      memory.splice(memory.lastIndexOf(num), 1);
    } else {
      memory.pop();
    }
    console.log(memory);
  }
  return memory;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
