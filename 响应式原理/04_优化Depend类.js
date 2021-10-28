//监听对象的变化（利用proxy对象）==============
const obj1 = {
    name: 'zhangsan',
    age: '21'
}

const obj2 = {
    like: 'running'
}

const proxyObj1 = new Proxy(obj1, {
    get: function(target, key, reciever) {
        console.log('get劫持obj1')

        //设置依赖
        const depend = setAndGetDepend(target, key)
        depend.addDepend()


        // return target[key]
        return Reflect.get(target, key, reciever)
    },
    set: function(target, key, newValue, reciever) {
        console.log('set劫持obj1')
        // 获取依赖
        const depend = setAndGetDepend(target, key)
        console.log('depend', depend)
        // 触发执行依赖的函数
        depend.exeReactiveFn()

        // target[key] = newValue
        Reflect.set(target, key, newValue, reciever)
    }
})

const proxyObj2 = new Proxy(obj2, {
    get: function(target, key, reciever) {
        console.log('get劫持obj2')

        //添加依赖
        const depend = setAndGetDepend(target, key)
        // depend.addReactiveFn(reactiveFunction)
        depend.addDepend()
        

        // return target[key]
        return Reflect.get(target, key, reciever)
    },
    set: function(target, key, newValue, reciever) {
        console.log('set劫持obj2')
        const depend = setAndGetDepend(target, key)
        console.log('depend', depend.reactiveFn, )
        // 触发执行依赖的函数
        depend.exeReactiveFn()

        // target[key] = newValue
        Reflect.set(target, key, newValue, reciever)
    }
})

//封装收集依赖类对象 ==============
class Depend {
    constructor() {
        // this.reactiveFn = []
        this.reactiveFn = new Set()
    }
    // addReactiveFn(fn) {
    //     this.reactiveFn.push(fn)
    // }
    addDepend() {
        if(reactiveFunction){
            this.reactiveFn.add(reactiveFunction)
        }
        
    }
    exeReactiveFn() {
        this.reactiveFn.forEach((fn) => {
            fn()
        })
    }
}

//需要响应执行的函数 ==============
function fn1() {
    console.log('执行fn1-------------')
    console.log('fn1', proxyObj1.name)
    console.log('fn1',proxyObj1.name)
}
function fn2() {
    console.log('fn2', proxyObj1.age)
}
function fn3() {
    console.log('fn3', proxyObj2.like)
}

// 添加需要响应执行的函数
// const depend = new Depend()
// depend.addReactiveFn(fn1)
// depend.addReactiveFn(fn2)
// depend.addReactiveFn(fn3)

//管理依赖 ========================================
//构建依赖树
const targetMap = new Map()
function setAndGetDepend(target, key) {
    let keyMap = targetMap.get(target)
    if(!keyMap) {
        keyMap = new Map()
        targetMap.set(target, keyMap)
    }
    let depend = keyMap.get(key)
    if(!depend) {
        depend = new Depend()
        keyMap.set(key, depend)
    }
    return depend
}

//初始化依赖===============================
let reactiveFunction = null;
function collecteRF(fn) {
    reactiveFunction = fn;
    fn();
    reactiveFunction = null;
}
collecteRF(fn1)
// collecteRF(fn2)
// collecteRF(fn3)




proxyObj1.name = 'lisi'
// proxyObj2.like = 'eating'



































// const targetMap = new Map()

// const keyMap_obj1 = new Map()
// const keyMap_obj2 = new Map()

// // keyMap_obj1.set('name', depend_name)
// // keyMap_obj1.set('age', depend_age)
// // keyMap_obj2.set('like', depend_like)

// keyMap_obj1.set('name', {depend_name: 'depend_name'})
// keyMap_obj1.set('age', {depend_age: 'depend_age'})
// keyMap_obj2.set('like', {depend_like: 'depend_like'})

// targetMap.set(obj1, keyMap_obj1)
// targetMap.set(obj2, keyMap_obj2)

// console.log(targetMap)
// console.log(targetMap.get(obj1))
// console.log(targetMap.get(obj2))


