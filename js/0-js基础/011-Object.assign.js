// Object.assign() 方法将所有可枚举（Object.propertyIsEnumerable() 返回 true）的自有（Object.hasOwnProperty() 返回 true）属性从一个或多个源对象复制到目标对象，返回修改后的对象。
// 例：
// let target = { a: 1, b: 2 }
// let source1 = { c: 3, d: 4 }
// let res = Object.assign(target, source1)
// console.log(res) // { a: 1, b: 2, c: 3, d: 4 }
// console.log(target) // { a: 1, b: 2, c: 3, d: 4 }
// console.log(res === target) // true

// 如果目标对象与源对象具有相同的 key，则目标对象中的属性将被源对象中的属性覆盖，后面的源对象的属性将类似地覆盖前面的源对象的属性。
// let target = { a: 1, b: 2 }
// let source1 = { b: 3, d: 4 }
// let source2 = { d: 5, e: 6 }
// let res = Object.assign(target, source1, source2)
// console.log(res) // { a: 1, b: 3, d: 5, e: 6 }
// console.log(target) // { a: 1, b: 3, d: 5, e: 6 }
// console.log(res === target) // true

// 假如源对象是一个对象的引用，它仅仅会复制其引用值。
// let target = { a: 1, b: 2 }
// let source1 = { c: {name: 'zhangsan', age: 20} }
// let res = Object.assign(target, source1)
// source1.c.age = 21
// console.log(res) // { a: 1, b: 2, c: { name: 'zhangsan', age: 21 } }

// 拷贝 Symbol 类型属性
// let target = { a: 1, b: 2 }
// let source1 = { [Symbol('age')]: 20 }
// let res = Object.assign(target, source1)
// console.log(res)

// 基本类型会被包装为对象
// let target = { a: 1, b: 2 }
// let source1 = '123'
// let source2 = true
// let source3 = 456
// let source4 = null
// let source5 = void 0
// // 基本数据类型将被包装
// // null 和 undefined 会被忽略
// // 只有 string 类型的包装对象拥有可枚举的自有属性
// let res = Object.assign(target, source1, source2, source3, source4, source5) 
// console.log(res)
// // { '0': '1', '1': '2', '2': '3', a: 1, b: 2 }














