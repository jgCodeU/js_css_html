// 1.原型链继承
// 子类原型指向父类实例
// 伪代码：
function P() {
    // ...
}
function C() {
    // ...
}
C.prototype = new P() 
// 例子：
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
// 伪代码：
function P(...arg) {
    // ...
}
function C() {
    P.call(this, ...arg)
    // ...
}
// 例子：
function P(...arg) {
    let [name, age] = arg 
    this.name = name
    this.age = age
}
P.prototype.color = ['red', 'blue'] // 修改显式原型添加color
P.__proto__.num = [1, 2, 3] //给隐式原型添加num属性
function C(...arg) {
    P.call(this, ...arg)
}
const obj = new C('zhangsan', 21)
console.log(obj)
console.log(obj.color) // undefined,无法继承父类原型上的属性。
console.log(P.color) // undefine,当读取函数对象的属性是，查找的原型是隐式原型
console.log(P.num) // [1, 2, 3]
// 优点：父类中的引用对象在子类中都是独立的，不被共享
// 缺点：
// （1）无法继承父类原型上的属性。
// （2）实父类的原型没有在实例的原型链上。
// （3）父类中相同的属性会被复制到每一个子类实例中。

// 3.组合继承
// 伪代码：
function P(...arg) {
    // ...
}
function C() {
    P.call(this, ...arg)
}
C.prototype === new P()
// 例子：
// ...
// 优点：
// （1）父类中的函数属性不被子类实例共享
// （2）子类实例可以共享父类原型中的属性
// 缺点：
// （1）子类实例上的属性会隐藏父类上的同名属性，父类中的属性会创建两份，内存浪费
// （2）父类构造函数调用两遍（ new P(),P.call() ）

// 4.寄生组合继承
// 伪代码：
function P(...arg) {
    // ...
}
function C(...arg) {
    P.call(this, ...arg)
    // ...
}
C.prototype = Object.create(P.prototype)
// 优点：
// （1）只调用一次父类构造函数
// （2）子类实例可使用父类原型链上的属性和方法

// 5.原型式继承
// ES5之前：
function createObj(proto) {
    function F() {}
    F.prototype = proto
    proto.constructor = F
    return new F()
}
// ES5之后: 
Object.create()


// 6.寄生式继承
// 封装原型式继承，来增强对象
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
// 将多个对象的属性拷贝（浅拷贝）到目标对象中，后面的属性会覆盖前面的同名属性


// 补充：
// instanceof和isPrototypeOf
// instanceof：检测构造函数Fun的prototype属性是否出现在对象obj的原型链上
// 语法：obj instanceof Fun
// 例子：
const obj = [1, 2 , 3]
obj instanceof Array // true
obj instanceof Object // true

// Object.prototype.isPrototypeOf：对象obj1是否出现在对象obj2的原型链上
// 语法：obj1.prototype.isPrototypeOf(obj2)
// 例子：
const obj1 = [1, 2, 3]
Array.prototype.isPrototypeOf(obj1) // true
Object.prototype.isPrototypeOf(obj1) // true

// Object.getPrototypeOf():返回给定对象的原型。如果没有继承属性，则返回 null 。
// 例子：
let arr = [1, 2, 3]
Object.getPrototypeOf(Array) === Object.getPrototypeOf(arr) // false
Object.getPrototypeOf(Array) === Function.prototype // true
Array.prototype === Object.getPrototypeOf(arr) // true





