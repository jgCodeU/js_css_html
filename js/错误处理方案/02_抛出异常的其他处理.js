class MyError {
    constructor(errorCode, errorMessage) {
        this.errorCode = errorCode
        this.errorMessage = errorMessage
    }
}

function testError(param) {
    if(param === 0) {
        // 1.抛出一个字符串类型的错误
        // throw 'param不能为0'

        // 2.抛出一个对象类型的错误
        // throw {errorCode: '0001', errorMessage: 'param不能为0'}

        // 3.抛出一个对象，这个对象由自己定义的类生成
        // throw new MyError(0001, 'param不能为0')

        // 4.使用JavaScript内置类：Error
        throw new Error('param不能为0')

        // 强调：如果已经抛出了异常，则后续代码都不会执行！！！
    }
}
testError(0)


















