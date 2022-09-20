// 1. 子类原型指向 Object.create(Parent.prototype) 创建的原型
// 2. 父类作为工具函数为子类实例添加属性
// 3. 将子类原型的 contractor 属性指向子类构造函数
function Parent(name) {
    this.name = name
    this.sayName = () => {
        console.log('sayName:', this.name)
    }
}

function Child(name, age) {
    Parent.call(this, name)
    this.age = age
    this.sayAge = () => {
        console.log('age:', this.age)
    }
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.construcor = Child
const childObj = new Child('zhangsan', 20)
console.log(childObj)
childObj.sayName()
childObj.sayAge()

// {
//     name: 'zhangsan',
//     sayName: [Function (anonymous)],
//     age: 20,
//     sayAge: [Function (anonymous)]
// }
// sayName: zhangsan
// age: 20















