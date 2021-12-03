const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class MyPromise {
    constructor(exeFn) {
        this.status = PROMISE_STATUS_PENDING

        const MyResolve = () => {
            if(this.status === PROMISE_STATUS_PENDING){
                this.status = PROMISE_STATUS_FULFILLED
                console.log('执行MyResolve')
            }
        }
        const MyReject = () => {
            if(this.status === PROMISE_STATUS_PENDING){
                this.status === PROMISE_STATUS_REJECTED
                console.log('执行MyReject')
            }
        }
        exeFn(MyResolve, MyReject)
    }
}


const promise = new MyPromise((MyResolve, MyReject) => {
    console.log('pending状态')
    MyResolve()
    MyReject()
})

//本节目标：
//在构建promise对象的时候，立即执行传入的函数
