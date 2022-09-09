// 数组展开运算符：可以将一个数组转为用逗号分隔的参数序列，且每次只能展开一层数组。
// let a = [1,2,4]
// console.log(...a)

// function fn(...args) {
//     console.log(args)
// }
// function foo(args) {
//     console.log(args)
//     console.log(...args)
// }
// fn(1,2,3)
// fn([1,2,3])
// fn('123')
// fn(1,2,3)

// foo(1,2,3)
// foo([1,2,3])
// foo('123')
// foo({
//     1:'1-1',
//     2:'2-2',
//     3:'3-3'
// })

// 展开运算符在数组中的使用场景：
// 1. 将数组转换为参数序列
// function add(x, y) {
//   return x + y;
// }
// const numbers = [1, 2];
// console.log(add(...numbers)); // 3

// 2. 复制数组
// const arr1 = [1, 2, 3]
// const arr2 = [...arr1]
// console.log(arr2) // [ 1, 2, 3 ]

// 3. 合并数组
// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const arr3 = ['a', 'b', ...arr1, 'c', ...arr2, 'd']
// console.log(arr3) // ['a', 'b', 1, 2, 3, 'c', 4, 5, 6, 'd']

// 4. 扩展运算符与解构赋值结合起来，用于生成数组
// const arr1 = ['a', 1, 2, 3]
// const [num1, ...numArr] = arr1
// console.log(numArr) // [ 1, 2, 3 ]

// 5. 字符串转换为数组
// const str = 'hello'
// const strToArr = [...str]
// console.log(strToArr) // [ 'h', 'e', 'l', 'l', 'o' ]

// 6. 任何 Iterator 接口的对象，都可以用扩展运算符转为真正的数组

// 7. 使用`Math`函数获取数组中特定的值（实际上也是利用了将数组转换成参数序列）
// const arr1 = [1, 3, 2, 7, 12, 8]
// const min = Math.min(...arr1)
// const max = Math.max(...arr1)
// console.log(min) // 1
// console.log(max) // 12

// ==============================================================================

// 对象展开运算符：取出参数对象中的所有可遍历属性，拷贝（浅拷贝）到当前对象之中。
// let a = {a:1}
// let b = {...a}
// console.log(b)

// let a = {a1:1 , a2:2}
// let b = {...a}
// console.log(b)

// let a = {
//     a1:'1-1',
//     a2:'2-2',
//     a3:'3-3'
// }
// let b = {...a}
// console.log('b', b)

// 合并对象
// var obj1 = { foo: 'bar', x: 42 };
// var obj2 = { foo: 'baz', y: 13 };
// var mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj) // { foo: 'baz', x: 42, y: 13 }

// 展开运算是浅拷贝
// var obj1 = { foo: 'bar', x: {a: 1, b: 2} };
// var obj2 = { foo: 'baz', y: 13 };
// var mergedObj = { ...obj1, ...obj2 };
// obj1.x.a = 3
// console.log(mergedObj)  // { foo: 'baz', x: { a: 3, b: 2 }, y: 13 }

// 注意：
// 1.在数组或函数参数中使用展开语法时，该语法只能用于 可迭代对象。
// 2.Object.assign() 函数会触发 setters，而展开语法则不会。
// 3.不能替换或者模拟 Object.assign() 函数：

// var obj1 = { foo: "bar", x: 42 };
// var obj2 = { foo: "baz", y: 13 };
// const merge = (...objects) => ({ ...objects });
// var mergedObj1 = merge(obj1, obj2);
// console.log(mergedObj1); // { '0': { foo: 'bar', x: 42 }, '1': { foo: 'baz', y: 13 } }
// var mergedObj2 = merge({}, obj1, obj2);
// console.log(mergedObj2); // { '0': {}, '1': { foo: 'bar', x: 42 }, '2': { foo: 'baz', y: 13 } }
