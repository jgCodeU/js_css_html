class myPromise {
    static PENDING = 'pending'
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected'
    constructor(func) {
        // 1.初始化状态
        this.promiseState = myPromise.PENDING
        this.promiseResult = null
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []
        // 2.执行传入的函数，执行过程中出错也要reject
        try {
            func(this.resolve.bind(this), this.reject.bind(this))
        } catch(err) {
            this.reject(err)
        }
    }
    // 3. 定义resolve、reject。（作用：修改状态，执行回调函数）
    resolve(result) {
        if(this.promiseState === myPromise.PENDING) {
            setTimeout(() => {
                this.promiseState = myPromise.FULFILLED
                this.promiseResult = result
                // 执行回调函数
                this.onFulfilledCallbacks.forEach((fun) => {
                    fun(result)
                })   
            });
        }
    }
    reject(reason) {
        if(this.promiseState === myPromise.PENDING) {
            setTimeout(() => {
                this.promiseState = myPromise.REJECTED
                this.promiseResult = reason
                // 执行回调函数
                this.onRejectedCallbacks.forEach((fun) => {
                    fun(reason)
            })
            });
        }
    }
    // 4.定义then(then的作用：状态满足时直接执行传入的函数，否则向回调函数数组中添加函数)
    then(onFulfilled, onRejected) {
        // （2）参数校验
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
        // （1）执行传入then的函数（参数校验后）
        if(this.promiseState === myPromise.FULFILLED) {
            // （3）增加异步
            setTimeout(() => {
                onFulfilled(this.promiseResult)    
            });
        }
        if(this.promiseState === myPromise.REJECTED) {
            setTimeout(() => {
                onRejected(this.promiseResult)    
            });
        }
        // （4）增加pending状态的处理
        if(this.promiseState === myPromise.PENDING) {
            this.onFulfilledCallbacks.push(onFulfilled)
            this.onRejectedCallbacks.push(onRejected)
        }
    }
}

console.log(1);
let promise1 = new myPromise((resolve, reject) => {
    console.log(2);
    setTimeout(() => {
        console.log('A', promise1.promiseState);
        resolve('这次一定');
        console.log('B', promise1.promiseState);
        console.log(4);
    });
})
promise1.then(
    result => {
        console.log('C', promise1.promiseState);
        console.log('fulfilled:', result);
    },
    reason => {
        console.log('rejected:', reason)
    }
)
console.log(3);



