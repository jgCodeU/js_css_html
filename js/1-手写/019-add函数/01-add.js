// function add(...args) {
//   let allArgs = [...args];
//   function fn(...newArgs) {
//     allArgs = [...allArgs, ...newArgs];
//     return fn;
//   }
//   fn.toString = function () {
//     if (!allArgs.length) {
//       return;
//     }
//     return allArgs.reduce((sum, cur) => sum + cur);
//   };
//   return fn;
// }


function add(...arg) {
    let allArgs = arg
    function fn(...newArgs) {
        allArgs = [...allArgs, ...newArgs]
        return fn
    }
    fn.toString = function () {
        let res = 0
        return allArgs.reduce((pre, cur) => {
            return pre + cur
        })
    }
    return fn
}

console.log(add(1)(2)(3).toString());
console.log(add(1, 2, 3)(4)(1).toString());
