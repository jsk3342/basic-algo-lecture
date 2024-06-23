function solution(str1, str2) {
  const obj1 = {};
  const obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (obj1[str1[i]] == undefined) {
      obj1[str1[i]] = 1;
    } else {
      obj1[str1[i]]++;
    }
    if (obj2[str2[i]] == undefined) {
      obj2[str2[i]] = 1;
    } else {
      obj2[str2[i]]++;
    }
  }

  for (let key of str1) {
    if (obj1[key] !== obj2[key]) {
      return "NO";
    }
  }
  return "YES";
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
