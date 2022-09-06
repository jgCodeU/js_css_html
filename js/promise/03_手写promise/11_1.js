let PROMISE_STATUS_PENDING = 'pending'
let PROMISE_STATUS_FULFILLED = 'fulfilled'
let PROMISE_STATUS_REJECTED = 'rejected'

class MyPromise {
    constructor(exeFn) {
        // 1.初始化promise状态
        this.status = PROMISE_STATUS_PENDING
        // 2.定义MyResolve和MyReject函数
        const MyResolve = function() {}
        const MyReject = function() {}
        // 3.执行传入的函数
        exeFn(MyResolve, MyReject)
    }

}