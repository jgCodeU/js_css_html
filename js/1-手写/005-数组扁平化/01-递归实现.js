// 实现一个方法，将多维数组变为一维数组
function flatArr(arr) {
    if(!arr.length) return
    return arr.reduce((preValue, curValue) => 
        Array.isArray(curValue) ? [...preValue, ...flatArr(curValue)] : [...preValue, curValue], 
        []
    )
}
console.log(flatArr([1,2,[2,3,[5,6,7],4],[1,2,[2,1,3],3]]))

















