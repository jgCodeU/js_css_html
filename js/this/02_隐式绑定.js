// 核心：将函数以对象的属性的方式进行调用

function foo() {
    console.log(this)
}

const person = {
    name: 'zhangsan',
    age: '19',
    fn: foo
}

foo() //独立函数调用
person.fn() //以对象属性的方式调用













