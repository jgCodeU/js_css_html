// let price = '123456789'
// let priceReg = /(?=\d{3}$)/
// console.log(price.replace(priceReg, ',')) // 123456,789


// let phone = '18379836654'
// let phoneReg1 = /(?=\d{4}$)/
// console.log(phone.replace(phoneReg1, '-')) // 1837983-6654

// let phoneReg2 = /(?=(\d{4})+$)/g
// console.log(phone.replace(phoneReg2, '-')) // 183-7983-6654


// 要求匹配如下颜色
/*
#ffbbad
#Fc01DF
#FFF
#ffE
*/
// const regex = /#([a-fA-F\d]{6}|[a-fA-F\d]{3})/g
// let string = "#ffbbad #Fc01DF #FFF #ffE";
// console.log(string.match(regex)) // ["#ffbbad", "#Fc01DF", "#FFF", "#ffE"]


// 匹配日期：xxxx-yy-zz
// const regex = /\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/
// console.log( regex.test("2017-06-10") ) // true
// console.log( regex.test("2017-11-10") ) // true
// console.log( regex.test("2017-00-10") ) // false

// 用户名匹配 字母、数字、下划线、$符号，以字母或者$开头，总共4——16位
// const regex = /^[a-zA-Z\$][a-zA-Z0-9_\$]{3,15}$/;
// const str = 'a123$45678987654'
// console.log(str.length)
// console.log(str.match(regex)[0])

// 匹配qq号，非0开头，5——11位
// const regex = /^[1-9]\d{4,10}/
// const str = '123456789'
// console.log(str.length)
// console.log(str.match(regex)[0])

// 匹配手机号 11位
// const regex = /^1[34578]\d{9}$/
// const str = '13300000001'
// console.log(str.length)
// console.log(str.match(regex)[0])


