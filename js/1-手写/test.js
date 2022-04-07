// 实现 instanceof
function myInstanceof(left, right) {
    // 获取对象的原型
    let proto = Object.getPrototypeOf(left)
    // 获取构造函数的原型
    let prototype = right.prototype
    // 当对象的原型不为null时，判断
    while(proto !== null) {
        if(proto === prototype) {
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
    return false
}

let a = {}
myInstanceof(a, Object)