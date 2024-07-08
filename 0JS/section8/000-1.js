const arr = [1, 2, 4, 5, 57, 7, 8, 9, 7];

const obj = {};

arr.forEach((v, i) => {
  obj[i] = {
    key: v,
    idx: i,
  };
});

console.log(obj);
