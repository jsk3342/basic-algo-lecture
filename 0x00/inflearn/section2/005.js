// function solution(arr) {
//   let 등수배열 = [];
//   let 등수 = 1;
//   let 겹침 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         등수++;
//       } else if (i !== j && arr[i] === arr[j]) {
//         등수--;
//         겹침++;
//       }
//     }
//     console.log("arr[i]의 등수는 ", 등수);
//     등수배열.push(등수 + 겹침);
//     등수 = 1;
//     겹침 = 0;
//   }

//   return 등수배열;
// }

// let arr = [87, 92, 92, 100, 76];
// console.log(solution(arr));

function solution(arr){  
  let n=arr.length;
  let answer= new Array(n).fill(1)

  for(let i=0; i<n; i++){
      for(let j=0; j<n; j++){
          if(arr[j]>arr[i]) answer[i]++;
      }
  }             
  return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));