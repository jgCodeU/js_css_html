// 1. 创建一个新的对象
// 2. 函数中的 this 指向新创建的这个对象
// 3. 修改对象的原型指向这个函数的原型
// 4. 执行函数中的代码
// 5. 返回新创建的对象（若函数的返回值是引用类型的数据，则返回这个引用类型的数据）
function myNew(fun, ...args) {
    // 箭头函数不能作为构造函数使用，利用箭头函数没有（显式）原型的特点，判断传入的函数是否为箭头函数
    if(!fun.prototype) {
        throw TypeError (`${fun.name} is not a constructor`)
    }
    // 以 fun 函数的原型作为新创建对象的原型
    const newObj = Object.create(fun.prototype)
    let res = fun.call(newObj, ...args)
    if(fun() && (typeof res === 'object' || typeof res === 'function')) {
        return fun()
    } else {
        return newObj
    }
}
// 测试1：普通函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function() {
  console.log(this.age);
};
let p1 = myNew(Person, "lihua", 18);
console.log(p1.name);
console.log(p1);
p1.say();
// lihua
// { name: 'lihua', age: 18 }
// 18


// 测试2：箭头函数
// let foo = () => {}
// myNew(foo) // Uncaught TypeError: foo is not a constructor




