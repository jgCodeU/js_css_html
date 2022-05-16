
function myInstanceof(obj, fun) {
    let objProto = Object.getPrototypeOf(obj)
    let funProto = fun.prototype
    while(objProto) {
        if(objProto === funProto) {
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

