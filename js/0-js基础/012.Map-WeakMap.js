// Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者基本类型）都可以作为一个键或一个值。

// Map 基本使用
// // 创建 Map 实例
// const map1 = new Map()
// console.log(map1)
// // 添加实例：map.Set(key, value)
// map1.set('name', 'zhangsan')
// map1.set('age', '20')
// console.log(map1) // {'name' => 'zhangsan', 'age' => '20'}


// Map.prototype.size：返回 Map 对象中的键值对数量。
// Map.prototype.get(key)：返回与 key 关联的值，若不存在关联的值，则返回 undefined。
// Map.prototype.has(key)：返回一个布尔值，用来表明 Map 对象中是否存在与 key 关联的值。
// Map.prototype.keys()：返回一个新的迭代对象，其中包含 Map 对象中所有的键，并以插入 Map 对象的顺序排列。
// Map.prototype.values()：返回一个新的迭代对象，其中包含 Map 对象中所有的值，并以插入 Map 对象的顺序排列。
// Map.prototype.entries()：返回一个新的迭代对象，其为一个包含 Map 对象中所有键值对的 [key, value] 数组，并以插入 Map 对象的顺序排列。
// Map.prototype.delete(key)：移除 Map 对象中指定的键值对，如果键值对存在并成功被移除，返回 true，否则返回 false。
// Map.prototype.clear()：移除 Map 对象中所有的键值对。

// const map2 = new Map()
// // console.log(map2)
// // 添加实例：map.Set(key, value)
// map2.set('name', 'zhangsan')
// map2.set('age', '20')
// const numObj = { num1: 1, num2: 2 }
// const numObjValue = { numObjValue1: 'vlue1', numObjValue2: 'vlue2' }
// map2.set(numObj, numObjValue)
// console.log(map2) 
// // {
// //     'name' => 'zhangsan',
// //     'age' => '20',
// //     { num1: 1, num2: 2 } => { numObjValue1: 'vlue1', numObjValue2: 'vlue2' }
// // }
// console.log(map2.size) // 3
// console.log(map2.get(numObj)) // { numObjValue1: 'vlue1', numObjValue2: 'vlue2' }
// console.log(map2.has(numObj)) // true
// console.log(map2.has({ num1: 1, num2: 2 })) // false
// console.log(map2.keys()) // [Map Iterator] { 'name', 'age', { num1: 1, num2: 2 } }
// console.log(map2.values()) // [Map Iterator] { 'zhangsan', '20', { numObjValue1: 'vlue1', numObjValue2: 'vlue2' } }
// console.log(map2.entries())
// // {
// //     [ 'name', 'zhangsan' ],
// //     [ 'age', '20' ],
// //     [
// //       { num1: 1, num2: 2 },
// //       { numObjValue1: 'vlue1', numObjValue2: 'vlue2' }
// //     ]
// // }
// console.log(map2.delete(numObj)) // true
// console.log(map2) // { 'name' => 'zhangsan', 'age' => '20' }
// console.log(map2.clear()) // undefined
// console.log(map2) // {}

// ========================================================================

// WeakMap
// WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
// 1.基本使用：
// 创建 WeakMap 实例
// const weakMapObj = new WeakMap()
// const objKey1 = { name: 'num' }
// weakMapObj.set(objKey1, { num1: 1, num2: 2, num3: 3 })
// function fun() {}
// weakMapObj.set(fun, 'emptyFun')
// console.log(weakMapObj)
// // key 必须是对象类型的数据
// weakMapObj.set('colors', ['red', 'green', 'blue']) // 报错：Invalid value used as weak map key

// 2. 常用方法
// WeakMap.prototype.get(key)：返回 WeakMap 中与 key 相关联的值，如果 key 不存在则返回 undefined。
// WeakMap.prototype.has(key)：返回一个布尔值，断言一个值是否已经与 WeakMap 对象中的 key 关联。
// WeakMap.prototype.delete(key)：删除 WeakMap 中与 key 相关联的值。删除之后， WeakMap.prototype.has(key) 将会返回 false。
// 创建 WeakMap 实例
const weakMapObj = new WeakMap()
const objKey1 = { name: 'num' }
weakMapObj.set(objKey1, { num1: 1, num2: 2, num3: 3 })
function fun() {}
weakMapObj.set(fun, 'emptyFun')
console.log(weakMapObj.get(fun)) // 'emptyFun'
console.log(weakMapObj.has(objKey1)) // true
console.log(weakMapObj.delete(fun)) //  true
console.log(weakMapObj) 












