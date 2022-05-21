



// 不改变原数组：

// 1.slice:返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
// MDN:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// 用法：arr.slice(begin, end)    begin：默认0，end：默认数组长度
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]
// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]
// console.log(animals.slice(-2));
// // expected output: Array ["duck", "elephant"]
// console.log(animals.slice(2, -1));
// // expected output: Array ["camel", "duck"]
// console.log(animals.slice());
// // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// 2.join:将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。
// MDN:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// 用法：arr.join(string)
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());
// // expected output: "Fire,Air,Water"
// console.log(elements.join(''));
// // expected output: "FireAirWater"
// console.log(elements.join('-'));
// // expected output: "Fire-Air-Water"


// 3.toLocaleString() 数组转字符串\


// 4.toString() 数组转字符串


// 5.concat：合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组（源数组的浅拷贝）。
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);
// array1[1] = '111'
// console.log('改变后', array1, array3)


// 6.indexof：返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// 用法：arr.indexof(searchEle, fromIndex)  searchEle：需要查找的元素； formIndex（可选）：起始索引，默认0
// var array = [2, 5, 9];
// console.log(array.indexOf(2));     // 0
// console.log(array.indexOf(7));     // -1
// console.log(array.indexOf(9, 2));  // 2
// console.log(array.indexOf(2, -1)); // -1
// console.log(array.indexOf(2, -3)); // 0


// 7.lastIndexOf：返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。
// 从数组的后面向前查找!!!，从 fromIndex 处开始。核心思想：从fromIndex处往前找，找到即返回索引，否则返回-1
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
// 用法：arr.lastIndexOf(searchEle, formIndex)  searchEle：需要查找的元素； formIndex（可选）：起始索引，默认数组长度-1
// let array = [2, 5, 9, 2];
// console.log(array.lastIndexOf(2)); // 3
// console.log(array.lastIndexOf(7)); // -1
// console.log(array.lastIndexOf(2, 3)); // 3
// console.log(array.lastIndexOf(2, 2)); // 0
// console.log(array.lastIndexOf(2, -2)); // 0
// console.log(array.lastIndexOf(2, -1)); // 0


// 8.includes：判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// 用法：arr.includes(searchEle, fromIndex)    searchEle：需要查找的元素; fromIndex(可选)：起始索引
// 规则：从fromIndex开始往后搜索
console.log([1, 2, 3].includes(2));     // true
console.log([1, 2, 3].includes(4));     // false
console.log([1, 2, 3].includes(3, 3));  // false
console.log([1, 2, 3].includes(3, -1)); // true
console.log([1, 2, NaN].includes(NaN)); // true




// 7.
// MDN：
// 用法：


// 7.
// MDN：
// 用法：













// Array.prototype.join()


// Array.prototype.reduce(callback, initialValue)
// function callback(pre, cur, index, arr){
//     // ......
// }
// 回调函数第一次执行时，pre 和 cur的取值有两种情况：
// 如果调用reduce()时提供了initialValue，pre取值为initialValue，cur取数组中的第一个值；
// 如果没有提供 initialValue，那么pre取数组中的第一个值，cur取数组中的第二个值。

// 如果数组为空且没有提供initialValue，会抛出TypeError 。
// 如果数组仅有一个元素（无论位置如何）并且没有提供initialValue， 或者有提供initialValue但是数组为空，那么此唯一值将被返回并且callback不会被执行。













