

function requestData(url) {
    // console.log('传入',url)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //......
            resolve(url)
        }, 1000);
    })
}








// 需求：
// 1. url: aaa -> res: aaa
// 2. url: res + 'bbb' -> res: aaabbb
// 3. url: res + 'ccc' -> res: aaabbbccc

// 方案一：多次回调
// requestData('aaa').then(res => {
//     requestData(res + 'bbb').then(res => {
//         requestData(res + 'ccc').then(res => {
//             console.log('方案一：', res)
//         })
//     })
// })


// 方案二：
// requestData('aaa').then(res => {
//     return requestData(res + 'bbb')
// }).then(res => {
//     return requestData(res + 'ccc')
// }).then(res => {
//     console.log('方案二：', res)
// })

// 方案三：Promise + generator
function* getData() {
    const res1 = yield requestData('aaa')
    const res2 = yield requestData(res1 + 'bbb')
    const res3 = yield requestData(res2 + 'ccc')
    console.log('方案三', res3)
}
// const getDataGenerator = getData()
// 手动执行getDataGenerator
// getDataGenerator.next().value.then(res => {
//     getDataGenerator.next(res).value.then(res => {
//         getDataGenerator.next(res).value.then(res => {
//             getDataGenerator.next(res)
//         })
//     })
// }) 

// 自动执行getData
// function exeGetData(getFn) {
//     const getDataGenerator = getFn()
//     function exeGenerator(res) {
//         const result = getDataGenerator.next(res)
//         if(result.done) {
//             // return result.value
//             return
//         } 
//         result.value.then(res => {
//             exeGenerator(res)
//         })
//     }
//     exeGenerator()
// }
// exeGetData(getData)

// 第三种方案：其他工具库

// 第四种方案：async/await
async function getData() {
    const res1 = await requestData('aaa')
    const res2 = await requestData(res1 + 'bbb')
    const res3 = await requestData(res2 + 'ccc')
    console.log('方法三', res3)
}
getData()



















