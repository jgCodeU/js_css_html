// ...展开运算符：将一个数组转为用逗号分隔的参数序列
// let a = [1,2,4]
// console.log(...a)

function fn(...args) {
    console.log(args)
}
function foo(args) {
    console.log(args)
    console.log(...args)
}
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


