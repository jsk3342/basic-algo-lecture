<<<<<<< Updated upstream
function solution(v) {
  let answer;
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      console.log(v);
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
=======
function solution(v){
  let answer;
  function DFS(v) {
    if(v > 7){
      return
    } else{
      DFS(v*2)
      DFS(v*2+1)
      console.log(v)
    } 
>>>>>>> Stashed changes
  }
  DFS(v);
  return answer;
}

<<<<<<< Updated upstream
solution(3);
=======
console.log(solution(1));
>>>>>>> Stashed changes
