function foo(param) {
    if(param === 0) {
        throw Error('foo error message')
    }
    console.log('foo中最后代码')
}

function foo1() {
    foo()
}

function foo2() {
    try {
        foo(0)
        console.log('foo2中tryfoo后续代码执行')
    } catch(err) {
        console.log(err.message)
    } finally {
        // finally中的代码无论之前是否有错误，都会执行
        console.log('finally代码执行')
    }
}

function foo3() {
    foo2()
}


// 错误处理的两种方法：
// 1.不处理，那么异常会进一步抛出。直到最顶层的调用
// 如果最顶层的调用也没处理，则会终止程序的执行。
// foo1()
// console.log('foo1后续代码')

// 2.使用try catch捕捉异常。
foo2()
console.log('foo2后续代码')















