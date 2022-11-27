function isObj(obj) {
    if(typeof obj === 'object' && obj !== null) {
        return true
    }
    return false
}

function deepClone(obj) {
    if(!isObj(obj)) {
        return obj
    }
    let newObj = Array.isArray(obj)? [] : {}
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key])
        }
    }
    return newObj

}

let obj = {
    name: 'zhangsan',
    age: 20
}
// let obj = [1,2,3]
newObj = deepClone(obj)
console.log(newObj)
console.log(newObj === obj)


