//封装收集依赖类对象 ==============
class Depend {
    constructor() {
        // this.reactiveFn = []
        this.reactiveFn = new Set()
    }
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



//将对象变为proxy对象
function reactivable(obj) {
    return new Proxy(obj, {
        get: function(target, key, reciever){
            const depend = setAndGetDepend(target, key)
            depend.addDepend()
            return Reflect.get(target, key, reciever)
        },
        set: function(target, key, newValue, reciever) {
            Reflect.set(target, key, newValue, reciever)
            const depend = setAndGetDepend(target, key)
            depend.exeReactiveFn()
        }
    })
}

// 使用=================
const obj1 = {
    name: 'zhangsan',
    age: '21'
}
const proxyObj1 = reactivable(obj1)
collecteRF(function() {
    console.log(proxyObj1.name)
})
proxyObj1.name = 'lisi'
proxyObj1.name = 'wangwu'


































