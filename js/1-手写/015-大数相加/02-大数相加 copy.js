const { parse } = require("@vue/compiler-dom");

function bigNumSum(data1, data2) {
  // 取两个数字的最大长度
  let maxLength = Math.max(data1.length, data2.length);
  data1 = data1.padStart(maxLength, "0");
  data2 = data2.padStart(maxLength, "0");
  let res = "";
  let l = 0;
  for (let i = maxLength - 1; i >= 0; i--) {
    res = ((parseInt(data1[i]) + parseInt(data2[i]) + l) % 10) + res;
    l = Math.floor((parseInt(data1[i]) + parseInt(data2[i]) + l) / 10);
  }
  if (l !== 0) {
    res = l + res;
  }
  return res
}

let data1 = "9007199254740991",
  data2 = "1234567899999999999";
console.log(bigNumSum(data1, data2));
