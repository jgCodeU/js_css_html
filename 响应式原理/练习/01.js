const target = {
    name: 'zhangsan',
    age: 20
}
let reactiveFunction = null
const targetMap = new Map()
//管理依赖
class Depend {
    constructor() {
        this.reactiveFn = new Set()
    }
    addReactiveFN() {
        // console.log('addReactiveFN', reactiveFunction)
        if(reactiveFunction) {
            this.reactiveFn.add(reactiveFunction)
        }
    }
    executeReactiveFn() {
        this.reactiveFn.forEach((fn) => {
            // console.log('executeReactiveFn',fn)
            fn()
        })
    }
}

//创建代理对象
const proxyObj = new Proxy(target, {
    get:function(target, key, reciever) {
        // console.log('proxyObj-Get')
        // 构建依赖树
        const depend = setAndGetDepend(target, key)
        // 添加依赖
        depend.addReactiveFN()
        return Reflect.get(target, key, reciever)
    },
    set: function(target, key, newValue, reciever) {
        // 执行依赖
        const depend = setAndGetDepend(target, key, 'setset')
        depend.executeReactiveFn()
        Reflect.set(target, key, newValue, reciever)
    }
})

// 构建依赖树
function setAndGetDepend(target, key, set) {
    let dependMap = targetMap.get(target)
    if(!dependMap) {
        dependMap = new Map()
        targetMap.set(target, dependMap)
    }
    let depend = dependMap.get(key)
    if(!depend) {
        depend = new Depend()
        dependMap.set(key, depend)
    }
    // console.log('setAndGetDepend',set,targetMap)
    return depend
}

// 初始化依赖
function collectFn(fn) {
    reactiveFunction = fn
    fn()
    reactiveFunction = null
}

function fn1() {
    // console.log('fn1---响应',proxyObj.age)
    console.log('fn1---响应')
    proxyObj.age
}
function fn2() {
    // console.log('fn2---响应',proxyObj.name)
    console.log('fn2---响应')
    proxyObj.name
}
collectFn(fn1)
collectFn(fn2)

// console.log('ceshi--1--targetMap', targetMap)
console.log('-----------------------')
// target.name = 'haha'
proxyObj.name = 'lisi111'
console.log(target.name)
proxyObj.name = 'lisi222'
console.log(target.name)
proxyObj.name = 'lisi333'
console.log(target.name)
console.log('分割分割分割分割分割分割分割分割')
proxyObj.age = '12'
console.log(target.age)
proxyObj.age = '13'
console.log(target.age)
proxyObj.age = '14'
console.log(target.age)

//注意：null也会被添加进依赖函数列表，当取出执行的时候会报错！！！添加时需要进行判断是否是函数！！！ 





