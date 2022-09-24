// call方法实现
// fun.call(thisObj, ...args)
// 核心思想：将fun函数添加为thisObj的方法，作为thisObj的方法来调用
// 简单实现：
// function myCall(thisObj, ...arg) {
//     thisObj.fun = this // this指向调用myCall的对象
//     return thisObj.fun() // 执行函数并返回执行结果
// }
// Function.prototype.myCall = myCall
// function foo() {
//     console.log(this)
// }
// foo.call({name: 'zhangsan', age: 20})

// 细节处理：
function myCall(thisObj, ...arg) {
    // 没有传入thisObj时，thisObj指向window
    thisObj = thisObj || window
    // 创建一个独一无二的值，防止覆盖thisObj原有的属性
    fun = Symbol('fun')
    thisObj[fun] = this
    // 执行函数
    const res = thisObj[fun](...arg)
    // 删除方法
    delete thisObj[fun]
    return res
}
Function.prototype.myCall = myCall
function foo(colorParam, sportParam) {
    this.color = colorParam
    this.sport = sportParam
    console.log(this)
}
foo.call({name: 'zhangsan', age: 21}, 'res', 'run')

