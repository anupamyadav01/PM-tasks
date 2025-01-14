// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

function modifyNumber(num) {
  let ans = "";

  for (let i = 0; i < num.length; i++) {
    ans += num[i];
    if (i < num.length - 1 && +num[i] % 2 === 0 && +num[i + 1] % 2 === 0) {
      ans += "-";
    }
  }

  return ans;
}

const str = "025468";
const ans = modifyNumber(str);
console.log(ans);
