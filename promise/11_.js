const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class MyPromise {
    constructor(exeFn) {
        this.status = PROMISE_STATUS_PENDING

        const MyResolve = (value) => {
            if(this.status === PROMISE_STATUS_PENDING){
                this.status = PROMISE_STATUS_FULFILLED
                this.value = value
                console.log('执行MyResolve')
            }
        }
        const MyReject = (reason) => {
            if(this.status === PROMISE_STATUS_PENDING){
                this.status === PROMISE_STATUS_REJECTED
                this.reason = reason
                console.log('执行MyReject')
            }
        }
        exeFn(MyResolve, MyReject)
    }
    then(fun1, fun2) {
        console.log('类中的then')
        if(this.status === PROMISE_STATUS_FULFILLED) {
            console.log('被resolve')
            fun1(this.value)
        } else if(this.status === PROMISE_STATUS_REJECTED) {
            console.log('被reject')
            fun2(this.value)
        }
        
    }
}


const promise = new MyPromise((MyResolve, MyReject) => {
    console.log('pending状态')
    MyResolve(111)
    MyReject(222)
})
promise.then((res) => {
    console.log('resolve',res)
}, (err) => {
    console.log('reject', err)
})
promise.then((res) => {
    console.log('resolve',res)
}, (err) => {
    console.log('reject', err)
})
//本节目标：
//

// promise.then((res) => {

// })
