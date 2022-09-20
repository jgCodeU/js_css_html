// 1.Set对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的。
// 2.NaN和undefined都可以

// 创建Set数据结构：
// const setData = new Set(param)
// 其中，param是一个具有iterable接口的数据解构，用来初始化Set数据结构
// 例：
// // 创建一个Set实例：
// const set1 = new Set()
// // 向Set实例中添加元素
// set1.add(1)
// set1.add(2)
// set1.add(2)
// set1.add({name: 'zhangsan', age: 20})
// set1.add({name: 'zhangsan', age: 20})
// const numObj = { num1: 1, num2: 2, num3: 3 }
// set1.add(numObj)
// set1.add(numObj)
// console.log(set1) 
// {
//     1,
//     2,
//     { name: 'zhangsan', age: 20 },
//     { name: 'zhangsan', age: 20 },
//     { num1: 1, num2: 2, num3: 3 }
// }

// Set 常用方法
// Set.prototype.size：返回 Set 对象中的值的个数
// Set.prototype.add(value)：在 Set 对象尾部添加一个元素。返回该 Set 对象。
// Set.prototype.delete(value)：移除值为 value 的元素，并返回一个布尔值来表示是否移除成功。
// Set.prototype.entries()：返回一个新的迭代器对象，该对象包含 Set 对象中的按插入顺序排列的所有元素的值的数组。为了使这个方法和 Map 对象保持相似， 每个值的键和值相等。
// Set.prototype.has(value)：返回一个布尔值，表示该值在 Set 中存在与否。
// Set.prototype.keys()：与 values() 方法相同，返回一个新的迭代器对象，该对象包含 Set 对象中的按插入顺序排列的所有元素的值。
// Set.prototype.values()：返回一个新的迭代器对象，该对象包含 Set 对象中的按插入顺序排列的所有元素的值。
// Set.prototype.clear()：移除Set对象内的所有元素。
// 例：
// const set2 = new Set()
// set1.add(1)
// set1.add(2)
// set1.add('123')
// set1.add(null)
// set1.add(void 0)
// set1.add(NaN)
// set1.add(NaN)
// console.log(set1) // { 1, 2, '123', null, undefined, NaN }
// console.log(set1.size) // 6
// console.log(set1.delete(NaN)) // true
// console.log(set1.delete(3)) // false
// console.log(set1) // { 1, 2, '123', null, undefined }
// console.log(set1.entries()) 
// // {
// //     [ 1, 1 ],
// //     [ 2, 2 ],
// //     [ '123', '123' ],
// //     [ null, null ],
// //     [ undefined, undefined ]
// // }
// console.log(set1.has(void 0)) // true
// console.log(set1.has(3)) // false
// console.log(set1.keys()) // { 1, 2, '123', null, undefined }
// console.log(set1.values()) // { 1, 2, '123', null, undefined }
// console.log(set1.clear()) // undefined
// console.log(set1) // {}



// 迭代 Set 对象
// const setObj = new Set()
// setObj.add(1)
// setObj.add('a')
// setObj.add({age: 20})
// for(let item of setObj) {
//     console.log(item)
// }

// 数组去重
// let arr = [1,2,2,2,3]
// let setArr = new Set(arr)
// let arr1 = Array.from(setArr)
// console.log(arr) // [ 1, 2, 2, 2, 3 ]
// console.log(setArr) // Set(3) { 1, 2, 3 }
// console.log(arr1) // [ 1, 2, 3 ]
// // 或者：
// let arr3 = [...new Set(arr)]
// console.log(arr3)




















