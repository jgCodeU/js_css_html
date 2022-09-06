function mySetInterval(fun, delay) {
    let timeoutId = null
    function interval() {
        fun()
        timeoutId = setTimeout(interval, delay)
    }
    interval()
    return {
        claerMySetInterval: (timeoutId) => {
            clearTimeout(timeoutId)
        }
    }
}
function foo() {
    console.log('aaa')
}
mySetInterval(foo, 1000)