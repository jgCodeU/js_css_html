function bigNumSum(data1, data2) {
  // 取两个数字的最大长度
  let maxLength = Math.max(data1.length, data2.length);
  // 用 0 补齐长度
  data1 = data1.padStart(maxLength, "0");
  data2 = data2.padStart(maxLength, "0");
  let l = 0; // 进位
  let res = ""; // 最终结果
  console.log(data1, "——", data2);
  for (let i = maxLength - 1; i >= 0; i--) {
    let temp = parseInt(data1[i]) + parseInt(data2[i]) + l;
    res = (temp % 10) + res;
    l = Math.floor(temp / 10);
  }
  if (l !== 0) {
    res = "" + l + res;
  }
  return res;
}

let data1 = '9007199254740991',
  data2 = '1234567899999999999';
console.log(bigNumSum(data1, data2));



