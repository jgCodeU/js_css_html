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

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) => ( { ...objects } );
var mergedObj1 = merge ( obj1, obj2);
console.log(mergedObj1) // { '0': { foo: 'bar', x: 42 }, '1': { foo: 'baz', y: 13 } }
var mergedObj2 = merge ( {}, obj1, obj2);
console.log(mergedObj2) // { '0': {}, '1': { foo: 'bar', x: 42 }, '2': { foo: 'baz', y: 13 } }



