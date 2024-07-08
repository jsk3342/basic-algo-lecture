const arr = [
  {
    name: "e",
    val: 1,
  },
  {
    name: "e",
    val: 3,
  },
  {
    name: "a",
    val: 2,
  },
  {
    name: "b",
    val: 4,
  },
  {
    name: "a",
    val: 1,
  },
];

function combineSameName(arr) {
  const combined = {};

  arr.forEach((item) => {
    if (combined[item.name]) {
      combined[item.name].val += item.val;
    } else {
      combined[item.name] = { ...item };
    }
  });

  return Object.values(combined);
}

const result = combineSameName(arr);
console.log(result);
