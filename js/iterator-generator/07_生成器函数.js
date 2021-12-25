//普通函数：
//依次执行，遇到return跳出函数，其后代码不再执行

//生成器函数
function * foo() {
    console.log('-----111-----')
    yield
    console.log('-----222-----')
    yield
    console.log('-----333-----')
    yield
    console.log('-----444-----')
}

// 调用生成器函数时，返回一个生成器对象（一种特殊的迭代器）
const generator = foo()
//调用generator的next方法，依次执行生成器函数的每一段代码（以yield为分隔）
generator.next()
generator.next()
generator.next()
generator.next()
generator.next()



