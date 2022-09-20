function flatArr(arr) {
    if(!arr.length) return
    while(arr.some((item) => {
        Array.isArray(item)
    })) {
        arr = [].concat(...arr)
    }
}
console.log(flatArr([1,2,[2,3,[5,6,7],4],[1,2,[2,1,3],3]]))
// [1, 2, 2, 3, 5, 6,7, 4, 1, 2, 2, 1,3, 3]












