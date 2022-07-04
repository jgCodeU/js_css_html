



//  --------------***************--------------
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
// console.log(array.lastIndexOf(2, -1)); // 3


// 8.includes：判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// 用法：arr.includes(searchEle, fromIndex)    searchEle：需要查找的元素; fromIndex(可选)：起始索引
// 规则：从fromIndex开始往后搜索
// console.log([1, 2, 3].includes(2));     // true
// console.log([1, 2, 3].includes(4));     // false
// console.log([1, 2, 3].includes(3, 3));  // false
// console.log([1, 2, 3].includes(3, -1)); // true
// console.log([1, 2, NaN].includes(NaN)); // true


//  --------------***************--------------
// 遍历数组：

// 1.forEach：对数组的每个元素执行一次给定的函数。
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// 用法：arr.forEach( callback(currentValue, index, array), thisArg] )
// currentValue: 数组中正在处理的元素
// index(可选): 数组中正在处理的元素的索引
// array(可选): 正在操作的数组
// thisArg(可选): 执行callback时的this值
// 不改变原数组，返回值是 undefined
// let arr = [1, 2, 3]
// arr.forEach((item) => {
//     if(item === 1) {
//         arr.push(4)
//     }
//     console.log(arr)
//     console.log(item)
// })
// console.log('arr', arr)
// 注意：
// (1). 除了抛出异常以外，没有办法中止或跳出 forEach() 循环。如果你需要中止或跳出循环，forEach() 方法不是应当使用的工具。
// (2). 对于空数组是不会执行回调函数的
// (3). 对于已在迭代过程中删除的元素，或者空元素会跳过回调函数
// (4). 遍历次数再第一次循环前就会确定，再添加到数组中的元素不会被遍历。
// (5). 如果已经存在的值被改变，则传递给 callback 的值是遍历到他们那一刻的值。


// 2.every:测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// 用法：arr.every(callback(element, index, array), thisArg)； index(可选) array(可选)
// function isBigEnough(element, index, array) {
//     return element >= 10;
// }
// console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
// console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true  
// 规则：
// (1).如果数组中检测到有一个元素不满足，则整个表达式返回 false，且剩余的元素不会再进行检测。
// (2).如果所有元素都满足条件，则返回 true。
// 注意：
// (1). 对于空数组是不会执行回调函数的
// (2). 对于已在迭代过程中删除的元素，或者空元素会跳过回调函数
// (3). 遍历次数再第一次循环前就会确定，再添加到数组中的元素不会被遍历。
// (4). 如果已经存在的值被改变，则传递给 callback 的值是遍历到他们那一刻的值。


// 3.测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// 用法：arr.some(callback(element, index, array), thisArg)； index(可选) array(可选) thisArg(可选)
// function isBiggerThan10(element, index, array) {
//     return element > 10;
// }
// console.log([2, 5, 8, 1, 4].some(isBiggerThan10));  // false
// console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); // true
// 规则：
// (1).如果数组中检测到有一个元素满足，则整个表达式返回 true，且剩余的元素不会再进行检测。
// (2).如果所有元素都不满足条件，则返回 false。
// 注意：
// (1). 对于空数组是不会执行回调函数的
// (2). 对于已在迭代过程中删除的元素，或者空元素会跳过回调函数
// (3). 遍历次数再第一次循环前就会确定，再添加到数组中的元素不会被遍历。
// (4). 如果已经存在的值被改变，则传递给 callback 的值是遍历到他们那一刻的值。



// 4.filter:创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// 用法：arr.some(callback(element, index, array), thisArg)； index(可选) array(可选) thisArg(可选)
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);
// 规则：
// 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或等价于 true 的值的元素创建一个新数组。
// 注意：
// (1). 对于空数组是不会执行回调函数的
// (2). 对于已在迭代过程中删除的元素，或者空元素会跳过回调函数
// (3). 遍历次数再第一次循环前就会确定，再添加到数组中的元素不会被遍历。
// (4). 如果已经存在的值被改变，则传递给 callback 的值是遍历到他们那一刻的值。


// 5.map：创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 用法：arr.map(callback(element, index, array), thisArg)； index(可选) array(可选) thisArg(可选)
// const array1 = [1, 4, 9, 16];
// // pass a function to map
// const map1 = array1.map(x => x * 2);
// console.log(map1);
// expected output: Array [2, 8, 18, 32]
// 注意：
// (1). 对于空数组是不会执行回调函数的
// (2). 对于已在迭代过程中删除的元素，或者空元素会跳过回调函数
// (3). 遍历次数再第一次循环前就会确定，再添加到数组中的元素不会被遍历。
// (4). 如果已经存在的值被改变，则传递给 callback 的值是遍历到他们那一刻的值。


// 6.reduce：对数组中的每个元素按序执行一个传入的函数，每一次运行， reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// 用法：详见以上网址


// 7.reduceRight：这个方法除了与reduce执行方向相反外，其他完全与其一致，请参考上述 reduce 方法介绍。
// MDN：
// 用法：



// 8.find：返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// 用法：arr.find(callback, thisArg)    callback:测试函数；   thisArg:测试函数执行时的this
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 10);
// console.log(found);
// expected output: 12
// 注意：
// (1). 对于已在迭代过程中删除的元素，或者空元素会执行回调函数，传入undefined
// (2). 遍历次数再第一次循环前就会确定，再添加到数组中的元素不会被遍历。
// (3). 如果已经存在的值被改变，则传递给 callback 的值是遍历到他们那一刻的值。

// 9.findIndex:返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// 用法：arr.findIndex(callback, thisArg)
// const array1 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element) => element > 13;
// console.log(array1.findIndex(isLargeNumber));
// expected output: 3



// 10.keys:返回一个包含数组中每个索引键的Array Iterator对象。
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
// 用法：arr.keys()
// const array1 = ['a', 'b', 'c'];
// const iterator = array1.keys();
// for (const key of iterator) {
//   console.log(key);
// }
// 注意：索引迭代器会包含那些没有对应元素的索引
// var arr = ["a", , "c"];
// var sparseKeys = Object.keys(arr);
// var denseKeys = [...arr.keys()];
// console.log(sparseKeys); // ['0', '2']
// console.log(denseKeys);  // [0, 1, 2]



// 11.values:返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values
// 用法：arr.values()
// const array1 = ['a', 'b', 'c'];
// const iterator = array1.values();
// for (const value of iterator) {
//   console.log(value);
// }
// expected output: "a"
// expected output: "b"
// expected output: "c"



// 12.entries:返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
// MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
// 用法：arr.entries()
// const array1 = ['a', 'b', 'c'];
// const iterator1 = array1.entries();
// console.log(iterator1);
// // expected output: Array [0, "a"]
// console.log(iterator1.next().value);
// // expected output: Array [1, "b"]

















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













