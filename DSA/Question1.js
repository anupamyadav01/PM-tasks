const str = "big black bug bit a big black dog on his big black nose";
const arr = str.split(" ");

const set = new Set();
const result = [];

for (const word of arr) {
  if (!set.has(word)) {
    set.add(word);
    result.push(word);
  }
}
const ans = result.join(" ");
