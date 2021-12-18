
//核心：独立函数调用

//例1:（直接调用）
// function foo() {
//     console.log(this)
// }
// foo() //window、global

// 例2:（直接调用）
// function foo1() {
//     console.log(this)
// }
// function foo2() {
//     console.log(this)
//     foo1()
// }
// function foo3(params) {
//     console.log(this)
//     foo2()
// }

// 例3:(函数作为参数传递)
// const obj = {
//     name: 'zhangsan',
//     foo: function() {
//         console.log(this)
//     }
// }
// const foo1 = obj.foo
// obj.foo()
// foo1()

// 例4:（函数作为参数传递）
// function foo() {
//     function bar() {
//         console.log(this)
//     }
//     return bar
// }
// const fn = foo()
// fn()



















