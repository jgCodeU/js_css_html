// 1.属性描述符
// propertydesciptor
// 例子：
// // 值属性
// {
//     value: '29',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }
// // 访问器属性
// {
//     get: function(){},
//     set: function(){},
//     enumerable: true,
//     configurable: true
// }

// 2.获取属性描述符
// const obj = {
//     name: 'zhangsan',
//     age :20
// }
// const descriptorOfName = Object.getOwnPropertyDescriptor(obj, 'name')
// console.log(descriptorOfName)
// // {
// //     value: 'zhangsan',
// //     writable: true,
// //     enumerable: true,
// //     configurable: true
// // }

// 3.设置属性描述符
// 新创建属性注意：`Object.defineProperty(obj, prop, descriptor)` 的`descriptor`参数不一定包含4个特性都包涵，如果是新创建一个属性，则没有包涵的特性将被设置成 false 或者 undefined。
// const obj = {}
// Object.defineProperty(obj, 'name', {
//     value: 'zhangsan'
// })
// console.log(obj)
// console.log(Object.getOwnPropertyDescriptors(obj))
// // {}
// // {
// //   name: {
// //     value: 'zhangsan',
// //     writable: false,
// //     enumerable: false,
// //     configurable: false
// //   }
// // }

// 修改已有属性的属性描述符
// const obj = { name: 'lisi' }
// Object.defineProperty(obj, 'name', {
//     value: 'zhangsan'
// })
// console.log(obj)
// console.log(Object.getOwnPropertyDescriptors(obj))
// // { name: 'zhangsan' }
// // {
// //   name: {
// //     value: 'zhangsan',
// //     writable: true,
// //     enumerable: true,
// //     configurable: true
// //   }
// // }


// `defineProperties`
// 如果想要一次性创建或者修改多个属性，可以使用`Object.defineProperties(obj, propObj)`
const obj = { name: 'lisi' }
Object.defineProperties(obj, {
    name: { value: 'zhangsan', writable: true },
    age: { value: 20, enumerable: true }
})
console.log(obj)
console.log(Object.getOwnPropertyDescriptors(obj))
// { name: 'zhangsan', age: 20 }
// {
//   name: {
//     value: 'zhangsan',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   age: { value: 20, writable: false, enumerable: true, configurable: false }
// }









