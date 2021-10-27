class Depend {
    constructor() {
        this.reactiveFn = []
    }
    addReactiveFn(fn) {
        this.reactiveFn.push(fn)
    }
    executeReactive() {
        this.reactiveFn.forEach((fn) => {
            fn()
        })
    }
}

const depend = new Depend()

function fn1() {
    console.log('fn1')
}
function fn2() {
    console.log('fn2')
}
function fn3() {
    console.log('fn3')
}

depend.addReactiveFn(fn1)
depend.addReactiveFn(fn2)
depend.addReactiveFn(fn3)

depend.executeReactive()

//核心思想：
//将依赖的函数放入depend对象的reactiveFn属性中
//在执行时，遍历reativeFn，依次执行放入其中的函数

