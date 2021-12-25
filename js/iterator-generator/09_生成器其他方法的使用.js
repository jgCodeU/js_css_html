function* foo(param) {
    console.log('-----111-----', param)
    const n = yield 100
    console.log('-----222-----', n)
    yield
    console.log('-----333-----')
    yield
    console.log('-----444-----')
    yield
    yield
    return 123
}

// 1.给每一段代码执行时出入参数
// 用前一段代码的返回值，来接收next传入的参数.(注意：给第一段next传参数，是在调用foo时传入的)
const generator = foo('第一段穿参数')
generator.next()
generator.next('给第二段next传入参数')















