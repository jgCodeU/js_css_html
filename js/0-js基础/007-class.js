// 1.基本语法：
class Point {
    constructor(x, y) {
        // 类的属性
        this.location = `(${x},${y})`
        this.x = x
        this.y = y
    }
    // 类的方法
    sayLocation() {
        console.log('我的位置在：', this.location)
    }
    sayLocationX(){
        console.log('我的x坐标是：', this.x)
    }
    sayLocationY(){
        console.log('我的y坐标是：', this.y)
    }
    // 取值函数（get），存值函数（set）
    get count() {
        return '获取count'
    }
    set count(value) {
        console.log('设置count', value)
    }
    // ...
}

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
// constructor是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor()方法，如果没有显式定义，一个空的constructor()方法会被默认添加。
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
const pointObj = new Point(1,3)
console.log(pointObj.count)
pointObj.count = 1

// 9.class表达式
// 类的名字是Me，但是Me只在 Class 的内部可用，指代当前类。在 Class 外部，这个类只能用MyClass引用。
const MyClass = class Me {
    getClassName() {
      return Me.name;
    }
  };
let inst = new MyClass();
inst.getClassName() // Me
Me.name // ReferenceError: Me is not defined








