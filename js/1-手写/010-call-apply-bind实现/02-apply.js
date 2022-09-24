// apply 方法实现
// fun.apply(thisObj, argArr)

// 实现：
function myApply(thisObj, argArr) {
    // thisObj = thisObj || window
    // con
    // 判断是否传入thisObj，没传入的话thisObj指向window
    thisObj = thisObj || window
    // 创建一个独一无二的值，防止覆盖thisObj原有方法
    let fun = Symbol('fun')
    thisObj[fun] = this
    // 执行函数 
    const res = thisObj[fun](...argArr)
    // 删除方法
    delete thisObj[fun]
    return res
}
Function.prototype.myApply = myApply
function foo(colorParam, sportParam) {
    this.color = colorParam
    this.sportParam = sportParam
    console.log(this)
}
const thisObj = {name:'zhangsan', age:23}
foo.apply(thisObj, ['pink', 'jump'])

