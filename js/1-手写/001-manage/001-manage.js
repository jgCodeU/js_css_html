// compose 函数
// （1）递归
function compose(...fns) {
    let len = fns.length
    let res = null
    return function fun(param){
        console.log('param', param)
        res = fns[len-1](param)
        console.log('res', res)
        if(len > 1) {
            len --
            return fun(res)
        } else {
            return res
        }
    } 
}
function fn1(param) {
    return param + 1 
}
function fn2(param) {
    return param + 2 
}
function fn3(param) {
    return param + 3 
}
const fn = compose(fn1, fn2, fn3)
console.log('fn(1)', fn(1)) 


// （2）数组的reduce方法
function compose(...fns) {
    console.log('fns', fns)
    return function(arg) {
        return fns.reduce((pre, cur) => {
            console.log('pre', pre, cur)
            return typeof pre === 'function' ? cur(pre(arg)) : cur(pre)
        })
    }
}
function fn1(param) {
    return param + 1 
}
function fn2(param) {
    return param + 2 
}
function fn3(param) {
    return param + 3 
}
const fn = compose(fn1, fn2, fn3)
console.log('fn(1)', fn(1)) 



