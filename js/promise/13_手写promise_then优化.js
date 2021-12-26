const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class MyPromise {
    constructor(exeFn) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledFns = []
        this.onRejsctedFns = []

        const MyResolve = (value) => {
            if(this.status === PROMISE_STATUS_PENDING){
                // setTimeout(() => {
                //     this.status = PROMISE_STATUS_FULFILLED
                //     console.log('执行MyResolve')
                //     this.value = value
                //     this.onFulfilled(this.value)
                // }, 0);
                // 添加微任务
                queueMicrotask(() => {
                    if(this.status !== PROMISE_STATUS_PENDING) return
                    this.statusc = PROMISE_STATUS_FULFILLED
                    this.value = value
                    this.onFulfilled.forEach(fn => {
                        fn(this.value)
                    });
                })
            }
        }
        const MyReject = (reason) => {
            if(this.status === PROMISE_STATUS_PENDING){
                queueMicrotask(() => {
                    if(this.status !== PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_REJECTED
                    this.reason = reason
                    this.onRejected.forEach(fn => {
                        fn(this.reason)
                    })
                })
            }
        }
        exeFn(MyResolve, MyReject)
    }
    then(onFulfilled, onRejected) {
        this.onFulfilled = onFulfilled
        this.onRejscted = onRejected
    }
}


const promise = new MyPromise((MyResolve, MyReject) => {
    console.log('pending状态')
    MyResolve(111111)
    // MyReject()
})
promise.then((res) => {
    console.log(res)
})