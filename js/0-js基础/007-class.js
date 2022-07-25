// 1.基本语法：
// class Point {
//     constructor(x, y) {
//         // 类的属性
//         this.location = `(${x},${y})`
//         this.x = x
//         this.y = y
//     }
//     // 类的方法
//     sayLocation() {
//         console.log('我的位置在：', this.location)
//     }
//     sayLocationX(){
//         console.log('我的x坐标是：', this.x)
//     }
//     sayLocationY(){
//         console.log('我的y坐标是：', this.y)
//     }
//     // 取值函数（get），存值函数（set）
//     get count() {
//         return '获取count'
//     }
//     set count(value) {
//         console.log('设置count', value)
//     }
//     // ...
// }

// 2.数据类型：
// typeof Point // function
// console.log('类的数据类型', typeof Point, Point === Point.prototype.constructor)

// 3.调用方式：
// 只能使用new调用，不能当成函数直接调用
// const pointObj = new Point(1,1)
// console.log('new调用Point', pointObj)
// Point(1,2) // 报错

// 4.prototype属性：
// 类的所有方法都定义在类的prototype属性上
// console.log('Point类的prototype', pointObj.sayLocation === Point.prototype.sayLocation)
// console.log('Point.prototype.sayLocation', Point.prototype.sayLocation)
// console.log('Point.sayLocation', Point.sayLocation)

// 5.类内部定义的方法不可枚举
// const pointFunKey = Object.keys(Point.prototype)
// console.log('pointFunKey', pointFunKey)
// const ownPropertyNames = Object.getOwnPropertyNames(Point.prototype)
// console.log('ownPropertyNames', ownPropertyNames)

// 6.constructor方法：
// constructor是类的默认方法，通过new命令生成对象实例时(constructor在使用new调用类的才执行！！！)，自动调用该方法。一个类必须有constructor()方法，如果没有显式定义，一个空的constructor()方法会被默认添加。
// constructor()方法默认返回实例对象（即this），也可以指定返回另外一个对象。
// class Foo {
//     constructor() {
//       return Object.create(null);
//     }
//   } 
// console.log(new Foo() instanceof Foo)

// 7.类的实例
// 实例的属性：除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）
// const point = new Point(2, 3);
// point.sayLocation()
// console.log(point.hasOwnProperty('x')) // true
// console.log(point.hasOwnProperty('y')) // true
// console.log(point.hasOwnProperty('sayLocation')) // false
// point.__proto__.hasOwnProperty('sayLocation') // true

//8.取值函数（getter）和存值函数（setter）
// const pointObj = new Point(1,3)
// console.log(pointObj.count)
// pointObj.count = 1

// 9.class表达式
// 类的名字是Me，但是Me只在 Class 的内部可用，指代当前类。在 Class 外部，这个类只能用MyClass引用。
// const MyClass = class Me {
//     getClassName() {
//       return Me.name;
//     }
//   };
// let inst = new MyClass();
// inst.getClassName() // Me
// Me.name // ReferenceError: Me is not defined

// 10.细节点：
// （1）严格模式：类和模块内部默认使用严格模式。
// （2）不存在变量提升：类定义之前不可使用。ES6不会将类的定义提升到代码的头部，这与继承有关，子类的定义必须在父类定义之后。
// （3）name属性：返回class后的类名。
// （4）Generator方法。
// （5）this指向：指向类的实例，但是当单独使用类的某个方法时，可能会报错。
// class classThis {
//     className = 'classThis'
//     constructor() {
//         console.log('调用classThis_constructor')
//         // this.className = 'classThis'
//         this.des = 'class中的this'
//     }
//     sayClassName() {
//         console.log('类的名字：', this.className)
//     }
// }
// const obj = new classThis()
// obj.sayClassName()
// const sayNameFun = obj.sayClassName
// sayNameFun() // 报错：Cannot read property 'className' of undefined at sayClassName
// 防止报错的方式：a.在构造方法中绑定this;b.使用箭头函数

// 11.静态方法：
// 在一个方法前加上static关键字，该方法不会被实例继承，可直接通过类来调用。
// class Point {
//     constructor(x, y) {
//         this.x = x
//         this.y = y
//     }
//     sayPointLocation() {
//         console.log('点的位置是：', `(${this.x}，${this.y})`)
//     }
//     static sayClassPointLocation() {
//         console.log('类的位置是：', `(1，1)`)
//     }
// }
// Point.sayClassPointLocation()
// const pointObj = new Point(1,2)
// pointObj.sayPointLocation()
// Point.sayPointLocation() // Point.sayPointLocation is not a function
// pointObj.sayClassPointLocation() // pointObj.sayClassPointLocation is not a function
// 父类的静态方法，可以被子类继承。
// class pointChild extends Point {
//     // ...
// }
// pointChild.sayClassPointLocation()
// 静态方法也是可以从super对象上调用。

// 12.实例属性新写法
// 实例属性除了可以定义在constructor中使用this来定义，还可直接写在类在最顶层
// class Point {
//     x = 1
//     y = 2
//     constructor() {
//         // ...
//     }
// }
// const pointObj = new Point()
// console.log(pointObj.x, pointObj.y)

// 13.静态属性：class本身的属性
// class Point {
//     // ...
// }
// Point.prop = 1
// Point.prop // 1
// const pointObj = new Point()
// pointObj.prop // undefined

// 14.私有方法：只能在类的内部访问，不能在类的外部访问
// 实现：将方法移到类外
// class Point {
//     constructor() {
//         // ...
//     }
//     foo(param) {
//         console.log('调用foo')
//         bar.call(this, param)
//     }
// }
// function bar() {
//     console.log('调用bar')
//     return this.x = 1
// }
// const pointObj = new Point()
// pointObj.foo()
// pointObj.x // 1

// 15.私有属性：在属性前使用#表示
// class IncreasingCounter {
//     #count = 0;
//     get value() {
//       console.log('Getting the current value!');
//       return this.#count;
//     }
//     increment() {
//       this.#count++;
//     }
// }
// const counter = new IncreasingCounter();
// // counter.#count // 报错
// // counter.#count = 42 // 报错

// 16.new.target属性
// new.target用在构造函数中，返回new调用的构造函数。如果构造函数没有用new调用，则返回undefined
class Point {
    constructor() {
        console.log('调用contractor', new.target === Point)
    }
}
const pointObj = new Point()

function Person() {
    console.log('new.target', new.target, new.target === Person)
}
Person()
const personObj = new Person()








