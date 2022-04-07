// function foo(a) {
//     // var a = 1111
//     function fun(){
//         console.log("fun")
//     }
//     var fun = 123
//     // console.log(a)
//     console.log(fun)
// }
// foo()


for (var i = 0; i < 5; i++) {
    setTimeout(function(j) {
        console.log(new Date, j);
    }, i*1000, i);
}

setTimeout(() => {
    console.log(i)
}, i*1000)


