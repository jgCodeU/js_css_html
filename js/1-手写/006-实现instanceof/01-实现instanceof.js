function myInstanceof(obj, fun) {
    if(typeof obj !== 'object') {
        return false
    }
    let objProto = Object.getPrototypeOf(obj)
    // console.log('objProto', objProto)
    let funPrototype = fun.prototype 
    while(objProto) {
        if(objProto === funPrototype) {
            return true
        } else {
            objProto = Object.getPrototypeOf(objProto)
        }
    }
    return false
}

let obj = []
myInstanceof(obj, Array)
console.log('myInstanceof-1', myInstanceof(obj, Array))
console.log('myInstanceof-2', myInstanceof(obj, Object))
console.log('myInstanceof-3', myInstanceof(obj, Set))

// 注意，原始类型使用 instanceOf 进行判断的时候会返回false
// 例如：
// console.log(null instanceof Object) // false 
// console.log(1 instanceof Number) // false 
// console.log('123' instanceof String) // false 
// console.log(true instanceof Boolean) // false 

