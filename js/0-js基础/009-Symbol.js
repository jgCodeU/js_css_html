// Symbol是es6出的一种类型，他也是属于原始类型的范畴
// 每个从 Symbol() 返回的 symbol 值都是唯一的。解决可能出现的全局变量冲突的问题。

// Symbol基本使用
// let name = Symbol('name')
// typeof name // 'symbol'
// let obj = {}
// obj[name] = 'zhangsan'
// console.log(obj[name]) // 'zhangsan'

// Symbol()每次都会创建一个全新的symbol值
// console.log(Symbol('123') === Symbol('123')) // false

// 不能用new调用Symbol
// new Symbol('234') // 报错：Symbol is not a constructor

// Symbol.for():
// 用 Symbol.for() 方法创建的的 symbol 会被放入一个全局 symbol 注册表中。Symbol.for() 并不是每次都会创建一个新的 symbol，它会首先检查给定的 key 是否已经在注册表中了。假如是，则会直接返回上次存储的那个。否则，它会再新建一个。
Symbol.for("foo"); // 创建一个 symbol 并放入 symbol 注册表中，键为 "foo"
Symbol.for("foo"); // 从 symbol 注册表中读取键为"foo"的 symbol
Symbol.for("bar") === Symbol.for("bar"); // true，证明了上面说的
Symbol("bar") === Symbol("bar"); // false，Symbol() 函数每次都会返回新的一个 symbol







