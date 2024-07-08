function nextPermutation(arr) {
  let k = -1;

  // Step 1: Find the largest index k such that arr[k] < arr[k + 1]
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      k = i;
      break;
    }
  }

  // If no such index exists, the permutation is the last permutation
  if (k === -1) {
    return arr.sort((a, b) => a - b);
  }

  // Step 2: Find the largest index l greater than k such that arr[k] < arr[l]
  let l = -1;
  for (let i = arr.length - 1; i > k; i--) {
    if (arr[i] > arr[k]) {
      l = i;
      break;
    }
  }

  // Step 3: Swap the value of arr[k] with that of arr[l]
  [arr[k], arr[l]] = [arr[l], arr[k]];

  // Step 4: Reverse the sequence from arr[k + 1] up to and including the final element
  let left = k + 1;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

function findNextProblemCount(n) {
  let digits = n.toString().split("").map(Number);
  let nextPerm = nextPermutation(digits);
  return parseInt(nextPerm.join(""), 10);
}

// 테스트 예제
console.log(findNextProblemCount(364)); // 436
console.log(findNextProblemCount(123)); // 132
console.log(findNextProblemCount(54321)); // 12345
