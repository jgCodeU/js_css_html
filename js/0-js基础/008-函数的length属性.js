// function foo(a, b, c) {}
// console.log('fooLength', foo.length)

// function foo(a, b = 1, c) {}
// console.log('fooLength', foo.length)

// function foo(a = 1, b , c) {}
// console.log('fooLength', foo.length)

function foo(a ,b, ...arg) {}
console.log('fooLength', foo.length)

// 函数的length属性：函数的形参中，在有默认值/剩余参数之前的形参个数

