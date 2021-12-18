//什么是new绑定：
// 通过new调用一个函数时，会创建一个对象，这个对象将会赋值给函数中的this
// this === 创建出来的对象

//new fun()执行的操作：
// 1.创建一个对象
// 2.将这个对象赋值给fun中的this
// 3.执行fun中的代码
// 4.返回（当fun函数自定义返回了一个对象实时，则返回自定义的对象，否则返回新创建的对象）

function foo() {
    this.name = 'zhangsan'
    this.age = 19
}

const obj = new foo()
console.log(obj)





















