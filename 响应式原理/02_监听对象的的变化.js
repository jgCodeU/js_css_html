//封装收集依赖类对象
class Depend {
    constructor() {
        this.reactiveFn = []
    }
    addReactiveFn(fn) {
        this.reactiveFn.push(fn)
    }
    exeReactiveFn() {
        this.reactiveFn.forEach((fn) => {
            fn()
        })
    }
}

//需要响应执行的函数
function fn1() {
    console.log('fn1')
}
function fn2() {
    console.log('fn2')
}
function fn3() {
    console.log('fn3')
}

// 添加需要响应执行的函数
const depend = new Depend()
depend.addReactiveFn(fn1)
depend.addReactiveFn(fn2)
depend.addReactiveFn(fn3)

//监听对象的变化（利用proxy对象）
const obj = {
    name: 'zhangsan',
    age: '21'
}

const proxyObj = new Proxy(obj, {
    get: function(target, key, reciever) {
        console.log('get劫持')
        // return target[key]
        return Reflect.get(target, key, reciever)
    },
    set: function(target, key, newValue, reciever) {
        console.log('set劫持')
        // 触发执行依赖的函数
        depend.exeReactiveFn()

        // target[key] = newValue
        Reflect.set(target, key, newValue, reciever)
    }
})

proxyObj.name = 'lisi'
proxyObj.age = 23

//核心思想：
//利用proxy对象，间接改变我们想要改变的的对象的属性
//从而捕获修改对象的操作，执行需要执行的函数

