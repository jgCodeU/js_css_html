// 实现一个方法，将多维数组变为一维数组

function flatter(arr) {
    if(!arr.length) { return arr }
    function exeFlatter(pre, cur) {
        return Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur] 
    }
    return arr.reduce(exeFlatter, [])
} 

console.log(flatter([1,2,[3,4],5,[6,[7,8,[9,10]]]]))