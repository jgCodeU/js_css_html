
// 生成器函数
// 当遇到yield的时候，函数暂停。当遇到return时，函数停止执行
// yield后跟的值(或者表达式)，就是当前next的返回值
function * foo() {
    console.log('-----111-----')
    yield 100
    console.log('-----222-----')
    yield
    console.log('-----333-----')
    yield
    console.log('-----444-----')
    yield
    yield
    return 123
}

// 调用生成器函数时，返回一个生成器对象（一种特殊的迭代器）
const generator = foo()
// 调用generator的next方法，依次执行生成器函数的每一段代码（以yield为分隔）
console.log('返回值', generator.next())
console.log('返回值', generator.next())
console.log('返回值', generator.next())
console.log('返回值', generator.next())
console.log('返回值', generator.next())
console.log('返回值', generator.next())

