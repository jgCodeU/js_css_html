
// 对象解构赋值

// 1.基本赋值
// let person = { name:'zhangsan', age:21 }
// let { name, age } = person
// console.log('name:', name,',', 'age:', age)

// 2.无声明赋值
// let person = { name:'zhangsan', age:21 };
// ({ name, age } = { name:'zhangsan', age:21 }) // 无声明赋值时，需要用括号括起来；（...）表达式前要有分号，否则会被当成上一行中的函数来执行
// // ({ name, age } = person) // 无声明赋值时，赋值号右侧不能使用（...）外面定义的对象（可能是作用域问题？？？）
// console.log('name:', name,',', 'age:', age)

// 3.给新的变量名赋值：将对象中的属性值提取出来，赋值给与对象属性不同名属性
// let person = { name:'zhangsan', age:21 }
// let { name: name1, age: age1 } = person // 将对象中的属性值提取出来，赋值给与对象属性不同名属性
// console.log('name1:', name1,',', 'age1:', age1)

// 4.默认值：给被赋值的变量定义默认值，当从对象中取出对应的值为undefined时，变量被赋予默认值
// let person = { age:20 }
// let { name = 'zhangsan', age = 22 } = person
// console.log('name:', name,',', 'age:', age)

// 5.给新的变脸名赋值并定义默认值
// let person = { age:21 }
// let { name: name1 = 'zhangsan', age: age1 } = person
// console.log('name1:', name1,',', 'age1:', age1)

// 6.对象解构中的Rest.（对象解构中的剩余参数）
// let person = { name:'zhangsan', age:21, likes1:'running', likes2:'jump' }
// let { name, ...rest } = person
// console.log('name', name, ',', 'reset', rest)

// 7.无效的 JavaScript 标识符作为属性名称
// 通过提供有效的替代标识符，解构可以与不是有效的JavaScript标识符的属性名称一起使用
// let person = { 'name-A':'zhangsan', age:21 }
// // let { 'name-A' } = person //这样写会报错，name-A不能作为JavaScript变量名
// let { 'name-A': name } = person
// console.log('name:', name)

// 8.解构时会查找原型链（如果对象自身不包含对应属性，将从原型链中查找）
let person = { 'name':'zhangsan' }
Object.prototype.age = 21 //在person对象的原型链中添加age属性
let { name, age } = person
console.log('name', name, ',', 'age', age)









