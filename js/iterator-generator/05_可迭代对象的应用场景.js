// 1. for of场景

// 2.展开运算符
// const iterableObj = {
//   names: ["abc", "bcd", "def"],
//   [Symbol.iterator]: function () {
//     let index = 0;
//     return {
//       next: () => {
//         if (index < this.names.length) {
//           return { value: this.names[index++], done: false };
//         } else {
//           return { value: undefined, done: true };
//         }
//       }
//     }
//   }
// }

// const names = ["abc", "bcd", "def"]
// const newNames = [...iterableObj, ...names]
// console.log(newNames)

//3.ES9的新语法，但是用的不是迭代器。
// const obj = { name:'zhangsan', age: '20' }
// const newObj = {...obj}
// console.log(obj, newObj)

//4.解构语法
// const nums = [ 123, 234, 456 ]
// const [ num1, num2, num3 ] = nums
// console.log(num1, num2, num3)
// // 注意，对象的解构赋值用的不是迭代器，是ES9的新语法
// const obj = { name: 'zhangsan', age: '21' }  
// const { name, age } = obj
// console.log(name, age)

// 5.创建一些其他对象时,需要传入一些可迭代对象
// const set1 = new Set(iterableObj)
// const set2 = new Set(nums)

// 6.Promise.all[]
const arr = [ 1, 2, 3 ]
Promise.all(arr).then(res => {
    console.log(res)
})



