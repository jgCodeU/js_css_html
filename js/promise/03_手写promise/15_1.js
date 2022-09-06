class myPromise {
    static PENDING = 'pending'
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected'
    constructor(func) {
        // 初始化状态
        this.promiseState = myPromise.PENDING
        this.promiseResult = null
        // 执行传入的函数，执行过程中出错也要reject
        try {
            func(this.resolve.bind(this), this.reject.bind(this))
        } catch(err) {
            this.reject(err)
        }
    }
    resolve(result) {
        if(this.promiseState === myPromise.PENDING) {
            this.promiseState = myPromise.FULFILLED
            this.promiseResult = result
        }
    }
    reject(reason) {
        if(this.promiseState === myPromise.PENDING) {
            this.promiseState = myPromise.REJECTED
            this.promiseResult = reason
        }
    }
    then(onFulfilled, onRejected) {
        // 参数校验
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
        // 执行传入then的函数（参数校验后）
        if(this.promiseState === myPromise.FULFILLED) {
            onFulfilled(this.promiseResult)
        }
        if(this.promiseState === myPromise.REJECTED) {
            onRejected(this.promiseResult)
        }
    }
}

