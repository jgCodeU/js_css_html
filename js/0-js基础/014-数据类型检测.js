// 1. typeOf：
// 可检测 8 种数据类型
// boolean、string、number、bigInt、symbol、undefined、function、object
// console.log(typeof true) // 'boolean'
// console.log(typeof 'abc') // 'string'
// console.log(typeof 123) // 'number'
// console.log(typeof BigInt(123456789876543123)) // 'bigint'
// console.log(typeof Symbol('aaa')) // 'symbol'
// console.log(typeof void 0) // 'undefined'
// const arrowFun = () => {} //
// const normalFun = function(){} //
// console.log(typeof arrowFun, typeof normalFun) // 'function' 'function'
// console.log(typeof []) // 'object'

// 2. `instanceOf`
// 判断引用类型数据的具体数据的类型
// 原理：判断构造函数的原型是否出现在对象的原型链上
// console.log(2 instanceof Number); // false
// console.log(true instanceof Boolean); // false
// console.log("str" instanceof String); // false
// console.log([] instanceof Array); // true
// console.log(function () {} instanceof Function); // true
// console.log({} instanceof Object); // true
// console.log([] instanceof Object); // true
// console.log(function(){} instanceof Object) // true
// console.log((() => {}) instanceof Object)
// console.log([] instanceof Function); // false
// console.log(function () {} instanceof Object); // true

// 3. constructor
// 通过constructor判断数据类型的的原理是：通过原型链读取到对象原型上的 constructor 属性，原型对象上的 constructor 属性指向构造函数。
// 注意：当改变了 constructor 或者原型的指向，就不能用这个方法来判断了。
// console.log((2).constructor === Number); // true
// console.log((true).constructor === Boolean); // true
// console.log(('str').constructor === String); // true
// console.log(([]).constructor === Array); // true
// console.log((function() {}).constructor === Function); // true
// console.log(({}).constructor === Object); // true

// 4. Object.prototype.toString.call()
// Object.prototype.toString.call() 使用 Object 对象的原型方法 toString 来判断数据类型：
// let a = Object.prototype.toString;
// console.log(a.call(2)); // [object Number]
// console.log(a.call(true)); // [object Boolean]
// console.log(a.call('str')); // [object String]
// console.log(a.call([])); // [object Array]
// console.log(a.call(function(){})); // [object Function]
// console.log(a.call({})); // [object Object]
// console.log(a.call(undefined)); // [object Undefined]
// console.log(a.call(null)); // [object Null]
// // 注意，不能直接在对象上调用 toString 方法，因为一些对象重自身含有 toString 方法，调用的时候根据原型链的知识面无法访问到 Object.prototype.toString，而对象自身的 toString 方法可能起不到判断效果。
// console.log([1,2,3].toString()) // 1,2,3
// console.log(function(){}.toString()) // function(){}
// console.log((() => {}).toString()) // () => {}

// 5. 判断数组的方法：
// Object.prototype.toString.call(arr) === '[object Array]' //
// Array.isArray()
// instanceof
// Array.prototype.isPrototypeOf()
// Object.getPrototypeOf(arr) === Array.prototype

const arr = []
console.log(Object.prototype.toString.call(arr) === '[object Array]') // true
console.log(Array.isArray(arr)) // true
console.log(arr instanceof Array) // true
console.log(Array.prototype.isPrototypeOf(arr)) // true
console.log(Object.getPrototypeOf(arr) === Array.prototype) // true


