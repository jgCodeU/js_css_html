// setTimeout实现setInterval
function mySetInterval(fun, delay) {
    let timer = null
    function interval() {
        fun()
        setTimeout(interval, delay);
    }
    interval()
    return {
        cancel: () => {
            clearTimeout(timer)
        }
    }
}
mySetInterval(() => console.log('mySetInterval'), 1000)


// function mySetInterval(fun, delay) {
//     setTimeout(() => {
//         mySetInterval(fun, delay)
//         fun()
//     }, delay)
// }

// mySetInterval(() => console.log('mySetInterval'), 1000)

