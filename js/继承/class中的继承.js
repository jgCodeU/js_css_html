// class中的继承（ES6）

// class的继承方式主要通过extends和super来实现，效果与寄生组合继承相同
// extends：
// 作用：继承父类所有的属性和方法，若子类中没有constructor方法，则会默认添加constructor和super
// 伪代码：
class Parent {
    constructor() {
        // ...
    }
    // ...
}
class Child extends Parent {
    constructor() {
        super()
        // ...
    }
    // ...
}
// 例子1：写明constructor和super
class Parent {
    constructor() {
        this.age = 45
        this.sayName = function() {
            console.log('我的年龄是：', this.age)
        }
    }
}
class Child extends Parent {
    // 写明constructor
    constructor() {
        super()
        this.age = 20
    }
}
const childObj = new Child()
console.log('childObj', childObj)
childObj.sayName()

// 例2:不写constructor和super
class Parent {
    constructor() {
        this.age = 45
        this.sayName = function() {
            console.log('我的年龄是：', this.age)
        }
    }
}
class Child extends Parent {
    // 写明constructor
    age = 20
}
const childObj = new Child()
console.log('childObj', childObj)
childObj.sayName()

// super:
// ES5中构造函数实现继承的方法：寄生混合继承
// （1）子类创建自己的对象实例（this）
// （2）父类通过call方法为子类实例添加自己的属性
// （3）使用Object.create()指定子类的原型
// ES6中class的继承机制：
// （1）使用父类创建一个实例对象（this）
// （2）使用子类继承并修改父类创建的实例对象（this）
// （3）返回这个实例对象 
// super的作用就是让子类继承父类的创建的this对象
// 例子：写明constructor但是不写super
class Parent {
    constructor() {
        this.age = 45
        this.sayName = function() {
            console.log('我的年龄是：', this.age)
        }
    }
    // ...
}
class Child extends Parent {
    constructor() {
        // 不写super()
        // super()
        this.age = 20
    }
}
const childObj = new Child()
console.log('childObj', childObj)
childObj.sayName()
// 报错：Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// 原因：没有调用super()，子类无法继承到父类的this

// super当作函数调用时：
// （1）代表父类构造函数，但返回的是子类的实例,super内部的this指向子类，在子类的constructor中super()就相当于是Parent.constructor.call(this)
// 例子：
class Parent {
    constructor() {
        console.log('new_Target', new.target.name)
        this.age = 45
        this.sayName = function() {
            console.log('我的年龄是：', this.age)
        }
    }
}
class Child extends Parent {
    constructor() {
        super()
        this.age = 20
    }
}
const childObj = new Child() // new_Target Child
const parentObj = new Parent() // new_Target Parent
console.log(childObj)
console.log(parentObj)
// （2）注意点：
// - 子类constructor中如果要使用this的话就必须放到super()之后
// - super当成函数调用时只能在子类的construtor中使用
class Parent {
    constructor() {
        console.log('new_Target', new.target.name)
        this.age = 45
        this.sayName = function() {
            console.log('我的年龄是：', this.age)
        }
    }
}
class Child extends Parent {
    constructor() {
        // super调用放在this之后
        this.age = 20
        super()
    }
}
const childObj = new Child() // 报错：Must call super constructor in derived class before accessing 'this' or returning from derived constructor

// super当作对象调用时：
// （1）super当作对象调用时，super指向：
// - 在子类的普通函数中，super指向父类原型对象
// - 在子类的静态方法中，super指向父类
// 例子：
class Parent {
    constructor() {
        this.age = 45
    }
    sayName() {
        console.log('我的名字是Parent')
    }
    static sayAge() {
        console.log('我的年龄是45')
    }
}
class Child extends Parent {
    constructor() {
        super()
        this.age = 20
        super.sayName()
    }
    sayParentName() {
        super.sayName()
    }
    static sayParentAge() {
        super.sayAge()
    }
}
const childObj = new Child()
// 调用普通方法
childObj.sayParentName()
// 调用静态方法
Child.sayParentAge()
//（2）super当作对象调用父类方法时，this指向：
// ES6规定，通过super调用父类的方法时，super会绑定子类的this。
// 例子：
class Parent {
    constructor() {

    }
    sayAge() {
        console.log('我的年龄是：', this.age)
    }
}
Parent.prototype.age = 40
class Child extends Parent {
    constructor() {
        super()
        this.age = 20
        super.sayAge()
    }
}
const childObj = new Child()
Parent.prototype.sayAge()
console.log('childObj', childObj)

// extends的继承目标（了解）
// extends后面接着的继承目标不一定要是个class。
// class B extends A {}，只要A是一个有prototype属性的函数，就能被B继承。
