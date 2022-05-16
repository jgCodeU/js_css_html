// '=='判断流程
function isEqual(left, right) {
    // 判断类型
    if(typeof left === typeof right) {
        return left === right
    } else {
        // null和undefined
        if((typeof left === 'null' && typeof right === 'undefined') || (typeof left === 'undefined' && typeof right === 'null')) {
               return true
        }
        // string和number
        if((typeof left === 'string' && typeof right === 'number') || (typeof left === 'number' && typeof right === 'string')) {
            if(typeof left === 'string') {
                return parseFloat(left) === right
            } else {
                return left === parseFloat(right)
            } 
        }
        // boolean和其他
        if(typeof left === 'boolean' || typeof right === 'boolean') {
            if(typeof left === 'boolean') {
                return isEqual(Number(left), right)
            } else {
                return isEqual(left, Number(right))
            }
        }
        // object和"'string', 'number','symbol'"
        if('注释规则') {
            // 将object转换为原始类型，再比较
        }
    }

}