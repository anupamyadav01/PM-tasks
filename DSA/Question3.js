let obj = {
  a: 1,
  b: 2,
};

const newObj = {};

for (const [key, value] of Object.entries(obj)) {
  newObj[value] = key;
}

for (const key in obj) {
  newObj[obj[key]] = key;
}
console.log(newObj);
