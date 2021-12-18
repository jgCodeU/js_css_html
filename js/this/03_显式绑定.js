// 使用call/apply/bind

// function foo() {
//     console.log(this)
// }
// foo()
// foo.call({name: 'zhangsan'}) //直接执行
// foo.apply({name: 'lisi'}) //直接执行
// const fn = foo.bind({name: 'wangwu'}) //返回一个函数
// fn() //此函数的this已经被绑定
// const obj = {age: 19}
// obj.fun = fn
// obj.fun() //由于fn的this已经被显式绑定，此时再将fn赋值给对象属性，调用时仍以显示绑定准

// const obj1 = {
//     age: 20,
//     foo1:function () {
//         console.log(this)
//     }
// }
// obj1.foo1().call({age:'21'}) //以显式绑定为准

// 总结：显式绑定优先级高于 > 隐式绑定
















