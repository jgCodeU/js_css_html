// 1.原型链继承
// 子类原型指向父类实例
function P() {
    // ...
    this.likes = [1, 2, 3]
    this.nameP = 'parent'
}
function C() {
    // ...
    this.nameC = 'child'
}
C.prototype = new P()
C.prototype.constructor = C
const obj = new C()
obj.nameP = 'pp'
obj.likes.push(9) // 会修改obj原型上的likes属性
obj.likes = [9, 8, 7] // 会在obj自身对象上添加likes属性
console.log('obj', obj)
// 优点：继承了父类模版和原型上的属性
// 缺点：
// （1）无法多继承
// （2）来自原型对象的所有属性都被子类实例共享了
// （3）创建子类时无法向父类构造函数传参
// 注意：无法通过对象直接修改原型对象上的数据，但是可以修改原型对象上的应用类型属性的属性

// 2.构造继承
// 利用父类为子类添加属性
function P(...arg) {
    // ...
}
function C() {
    P.call(this, ...arg)
    // ...
}
// 
// 缺点：

// 3.组合继承
function P(...arg) {
    // ...
}
function C() {
    P.call(this, ...arg)
}
C.prototype === new P()

// 4.寄生组合继承
Object.create(protoObj)

// 5.原型式继承
function createObj(proto) {
    function F() {}
    F.prototype = proto
    proto.constructor = F
    return new F()
}

// 6.寄生式继承
// 封装寄生式继承，来增强对象
function createObj(proto) {
    // 寄生组合继承
    const obj = Object.create(proto)
    // 增强对象
    obj.fn = function() {
        //...
    }
    return obj
}

// 7.多继承
Object.assign()
