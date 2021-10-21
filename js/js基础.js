// //手写call()
// // fun.imCall(obj, arg1, arg2, arg3, ...)
// //（1）实现基本功能
// // function imCall(obj, ...args){
// //     obj.fn = this; //this指向调用imCall的对象
// //     return obj.fn(); //执行函数并返回执行结果
// // }
// //（2）细节处理
// function imCall(obj, ...args) {
//     const fn = Symbol('fn'); //将'fn'映射为一个Symbol数据，防止覆盖原obj有属性
//     obj = obj || window; //若没有传入obj，将obj赋值为window
//     obj[fn] = this; //在obj上添加fu方法
//     const result = obj[fn](...args) // 执行函数
//     delete obj[fn]; //删除方法
//     return result; //返回执行结果
// }

// Function.prototype.imCall = imCall

// function fun() {
//     console.log('执行fun',this)
//     console.log(this.name)
// }
// let obj1 = {
//     name:'lisi'
// }
// fun.imCall(obj1)

// ==============================

// //手写apply()（和call()的区别仅仅是参数传入的方式不同）
// //fun.imApply(obj,argArr)
// function imApply(obj, argArr) {
//     const fn = Symbol('fn')
//     obj = obj || window
//     obj[fn] = this
//     const result = obj[fn](...argArr)
//     delete obj[fn]
//     return result
// }
// Function.prototype.imApply = imApply
// function fun() {
//     console.log(this)
// }
// const obj = { name: 'zhangsan', age: '21'}
// fun.imApply(obj,[])

// ==============================

// //手写bind()，注意：bind()返回值是一个函数
// //fun.imBind()
// function imBind(obj) {
//     const _this = this
//     function bindFn() {
//         const fn = Symbol('fn')
//         obj = obj || window
//         obj[fn] = _this
//         const result = obj[fn]()
//         delete obj[fn]
//         return result
//     }
//     return bindFn;
// }
// Function.prototype.imBind = imBind
// function fun() {
//     console.log(this)
// } 
// const obj = {name: 'zhangsan', age: '23'}
// const foo = fun.imBind(obj)
// foo()

// ==============================

// // 手写防抖(函数触发后计时一段时间后再执行，若计时期间重复触发，则重新计时)
// // const fun = imDebounce(fn, delay)
// function imDebounce(fn, delay) {
//     console.log('执行imDebouncd')
//     function fun() {
//         console.log('执行fun')
//         clearTimeout(fn.timeId)
//         fn.timeId = setTimeout(() =>{
//             fn()
//         }, delay)
//     }
//     return fun
// }

// function foo() {
//     console.log('防抖foo')
// }
// const DebouncedFn = imDebounce(foo, 1500)
// setInterval(() => {
//     DebouncedFn()
// }, 500);





// ==============================


//手写节流（一个时间段内，同一函数重复触发多次，只在计时结束时执行最后一次的触发）





//实现组合函数
// // （1）简单实现
// function add(m) { 
//     return m+10
// }

// function double(n) {
//  return n*2
// }

// function compose(fn1, fn2) {
//     return function(m){
//         fn2(fn1(m))
//     }
// }
// （2）通用组合函数实现








