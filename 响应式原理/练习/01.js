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
        console.log('addReactiveFN', reactiveFunction)
        this.reactiveFn.add(reactiveFunction)
    }
    executeReactiveFn() {
        this.reactiveFn.forEach((fn) => {
            console.log('executeReactiveFn',fn)
            fn()
        })
    }
}

//创建代理对象
const proxyObj = new Proxy(target, {
    get:function(target, key, reciever) {
        console.log('proxyObjGet')
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
    console.log('targetMap',set,targetMap)
    return depend
}

// 初始化依赖
function collectFn(fn) {
    reactiveFunction = fn
    fn()
    reactiveFunction = null
}

function fn1() {
    console.log('fn1---响应',proxyObj.age)
}
function fn2() {
    console.log('fn2---响应',proxyObj.name)
}
collectFn(fn1)
collectFn(fn2)

console.log('ceshi--1')
console.log('ceshi--2',proxyObj.name = 'lisi',proxyObj.name)
// proxyObj.name = 'lisi'





