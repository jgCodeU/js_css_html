// var sizeof1 = function (str, charset) {
//   var total = 0,
//     charCode,
//     i,
//     len;
//   charset = charset ? charset.toLowerCase() : "";
//   if (charset === "utf-16" || charset === "utf16") {
//     for (i = 0, len = str.length; i < len; i++) {
//       charCode = str.charCodeAt(i);
//       if (charCode <= 0xffff) {
//         total += 2;
//       } else {
//         total += 4;
//       }
//     }
//   } else {
//     for (i = 0, len = str.length; i < len; i++) {
//       charCode = str.charCodeAt(i);
//       if (charCode <= 0x007f) {
//         total += 1;
//       } else if (charCode <= 0x07ff) {
//         total += 2;
//       } else if (charCode <= 0xffff) {
//         total += 3;
//       } else {
//         total += 4;
//       }
//     }
//   }
//   return total;
// };
// console.log(sizeof1('a'))

var Emoji = function (str, charset) {
  let total = 0
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode <= 0x007f) {
      total = 1;
    } else if (charCode <= 0x07ff) {
      total = 2;
    } else if (charCode <= 0xffff) {
      total = 3;
    } else {
      total = 4;
    }
  }
  if(total > 3){
    showToast('是emoji')
  }
};

