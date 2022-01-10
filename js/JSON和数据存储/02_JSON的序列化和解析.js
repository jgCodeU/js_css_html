const obj = {
    name: 'zhangsan',
    age: 21,
    likes: {
        name: '足球',
        years: 5
    }
}

// 将对象转换为JSON格式的字符串
const objString = JSON.stringify(obj)
localStorage.setItem('objString', objString)

const objStringGet = localStorage.getItem('objString')
console.log('objStringGet', objStringGet)
console.log(JSON.parse(objStringGet))






