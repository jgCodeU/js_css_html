let PROMISE_STATUS_PENDING = "pending"
let PROMISE_STATUS_FULFILLED = "fulfilled"
let PROMISE_STATUS_REJECTED = "rejected"

class MyPromise {
    constructor(exeFn) {
        exeFn(this.resolve, this.reject)
    }
    // 状态和值
    status = PROMISE_STATUS_PENDING
    value = null
    reason = null
    onFulfilledCallbackFns = null
    onRejectedCallbackFns = null
    // 内部方法
    resolve = (value) => {
        if(this.status === PROMISE_STATUS_PENDING) {
            console.log("执行resolve", value)
            this.status = PROMISE_STATUS_FULFILLED
            this.value = value

            // 执行缓存的函数
            if(this.onFulfilledCallbackFns) {
                this.onFulfilledCallbackFns(value)
            }
        }
    }
    reject = (reason) => {
        if(this.status === PROMISE_STATUS_PENDING) {
            this.status = PROMISE_STATUS_REJECTED
            this.reason = reason

            // 执行缓存的函数
            if(this.onRejectedCallbackFns) {
                this.onRejectedCallbackFns(value)
            }
        }
    }
    then(onFulfilled, onRejected){
        if(this.status === PROMISE_STATUS_FULFILLED) {
            onFulfilled(this.value)
        } else if(this.status === PROMISE_STATUS_REJECTED) {
            onRejected(this.reason)
        } else if(this.status === PROMISE_STATUS_PENDING){
            this.onFulfilledCallbackFns = onFulfilled
            this.onRejectedCallbackFns = onRejected
        }
    }
}

const promise = new MyPromise((resolve, reject) => {
    console.log("新建promise对象")
    // resolve("success")
    setTimeout(() => {
        resolve("success")
    }, 1000)
})
promise.then((res) => {
    console.log("promise-then", res)
})





