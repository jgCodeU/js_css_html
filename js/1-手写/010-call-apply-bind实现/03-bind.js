// bind实现
// fun.bind(thisObj)
// 核心思想：对函数进行包装，包装时可利用call或者apply方法 

// 实现：
function myBind(thisObj, ...arg) {
    const fun = this
    thisObj = thisObj || window
    const argParam = arg
    const res = function(...innerArgParam) {
        // 参数合并
        innerArg = [...argParam, ...innerArgParam]
        if(this instanceof res) {
           return new fun(...innerArg)
        } else {
            fun.call(thisObj, ...innerArg)
        }
        
    }
    return res
}
Function.prototype.myBind = myBind
const thisObj = {
    name: 'hahaha',
    age: 24
}
function foo(colorParam, sportParam) {
    this.color = colorParam
    this.sport = sportParam
    console.log(this)
}
foo.myBind(thisObj, 'skyBlue', 'swim')()
foo.myBind(thisObj, 'skyBlue111', 'swim111')()
foo.myBind(thisObj)('skyBlue222', 'swim222')
foo.myBind(thisObj, 'skyBlue111', 'swim111')('skyBlue222', 'swim222')
foo.myBind(thisObj, 'skyBlue111')( 'swim222')
let foo1 = foo.myBind(thisObj, 'skyBlue111', 'swim111')
new foo1()


// 内置bind函数测试
// function foo(colorParam, sportParam) {
//     this.color = colorParam
//     this.sport = sportParam
//     console.log(this)
// }
// const thisObj = {
//     name: 'hahaha',
//     age: 24
// }
// // foo.bind(thisObj, 'skyBlue111', 'swim111')()
// // foo.bind(thisObj)('skyBlue222', 'swim222')
// // foo.bind(thisObj, 'skyBlue111')( 'swim222')
// let foo1 = foo.bind(thisObj, 'skyBlue111', 'swim111')
// new foo1()




