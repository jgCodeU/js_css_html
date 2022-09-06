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
        const promise2 = new myPromise((resolve, reject) => {
            // （1）执行传入then的函数（参数校验后）
            if(this.promiseState === myPromise.FULFILLED) {
                // （3）增加异步
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.promiseResult)
                        resolvePromise(promise2, x, resolve, reject); 
                    } catch(err) {
                        reject(err)
                    }
                    
                });
            }
            if(this.promiseState === myPromise.REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.promiseResult)    
                        resolvePromise(promise2, x, resolve, reject)
                    } catch(err) {
                        reject(err)
                    }
                });
            }
            // （4）增加pending状态的处理
            if(this.promiseState === myPromise.PENDING) {
                this.onFulfilledCallbacks.push(() => {
                    try {
                        let x = onFulfilled(this.promiseResult)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch(err) {
                        reject(err)
                    }
                })
                this.onRejectedCallbacks.push(() => {
                    try {
                        let x = onRejected(this.promiseResult)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch(err) {
                        reject(err)
                    }
                })
            }
        })
        return promise2
    }

    static resolve(value) {
        // value为myPromise时，直接返回该value
        if(value instanceof myPromise) {
            return value
        }
        // value含有then方法时，新建一个myPromise，且状态由then方法决定
        if(value instanceof Object && 'then' in value) {
            return new myPromise((resolve, reject) => {
                value.then(resolve, reject)
            })
        }
        // value为其他值时，直接新建一个myPromise，resovle这个Value
        return new myPromise((resolve, reject) => {
            resolve(value)
        })
    }

    static reject(reason) {
        // 直接新建一个myPromise，reject传入的reason即可
        return new myPromise((resolve, reject) => {
            reject(reason)
        })
    }

    catch(catchCallback) {
        // Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
        return this.then(null, catchCallback)
    }

    finally(callback) {
        // finally可以避免同样的语句在then和catch中写两遍
        return this.then(callback, callback)
    }

    // myPromise.all
    static all(promises) {
        return new myPromise((resolve, reject) => {
            if(Array.isArray(promises)) {
                let result = [] // 存储结果
                let count = 0 // 计数器
                // 如果传入的数组为空，则resolve这个空数组
                if(promises.length === 0) {
                    return resolve(promises)
                }
                promises.forEach((item, index) => {
                    myPromise.resolve(item).then(
                        value => {
                            count ++
                            // 存储当前promise的结果
                            result[index] = value
                            // 当数组中所有promise都执行完成后，改resolve新建的promise
                            count === promises.length && resolve(result)
                        },
                        reason => {
                            // 当传入的promises中有reject的，直接按照reject来执行后续操作
                            reject(reason)
                        }
                    )
                })
            } else {
                return reject(new TypeError('Argument is not iterable'))
            }
        })
    } 

    static allSettled(promises) {
        return new myPromise((resolve, reject) => {
            if(Array.isArray(promises)) {
                let result = []
                let count = 0
                // 当传入的数组是个空数组时，直接resolve这个空数组
                if(promises.length === 0) return resolve(promises)
                promises.forEach((item) => {
                    myPromise.resolve(item).then(
                        value => {
                            count ++
                            result[count] = {
                                status: 'fulfilled',
                                value: value
                            }
                            count === promises.length && resolve(result)
                        },
                        reason => {
                            count ++
                            result[reason] = {
                                status: 'rejected',
                                reason: reason
                            }
                            count === promises.length && resolve(result)
                        }
                    )
                })
            } else {
                return reject(new TypeError('Argument is not iterable'))
            }
        })
    }

    static any(promises) {
        return new myPromise((resolve, reject) => {
            if(Array.isArray(promises)) {
                let errs = []
                let count = 0
                if(promises.length === 0) return reject(new AggregateError('All promises were rejected'))
                promises.forEach((item) => {
                    myPromise.resolve(item).then(
                        value => {
                            resolve(value)
                        },
                        reason => {
                            errs[count] = reason
                            count ++
                            count === promises.length && reject(new AggregateError(errs))
                        }
                    )
                })
            } else {
                return reject(new TypeError('Argument is not iterable'))
            }
        })
    }
}

function resolvePromise(promise, x, resolve, reject) {
    if(x === promise) {
        // （1）x和原来的promise是同一个
        return reject(new TypeError('Chaining cycle detected for promise'))
    }
    if(x instanceof myPromise) {
        // （2）x是一个新的promise
        if(x.promiseState === myPromise.PENDING) {
            x.then(
                y => { resolvePromise(promise, y, resolve, reject) },
                reject
            )
        } else if(x.promiseState === myPromise.FULFILLED) {
            resolve(x.promiseResult)
        } else if(x.promiseState === myPromise.REJECTED) {
            reject(x.promiseResult)
        }

    } else if(x !== 'null' && (typeof x === 'object' || typeof x === 'function')) {
        // （3）x是对象或者函数
        try {
            var then = x.then
        } catch(err) {
            return reject(err)
        }
        if(typeof then === 'function') {
            let called = false
            try {
                then.call(
                    x,
                    y => {
                        if(called) return
                        called = true
                        resolvePromise(promise, y, resolve, reject)
                    },
                    r => {
                        if(called) return
                        called = true
                        reject(r)
                    }
                )
            } catch(err) {
                if(called) return
                called = true
                reject(err)
            }
        } else {
            resolve(x)
        }

    } else {
        // （4）其他
        return resolve(x)
    }
}



