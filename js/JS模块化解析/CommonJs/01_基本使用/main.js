// 使用另一个模块导出的对象，就需要导入 require
const { name, age, foo } = require("./part.js")
foo()
console.log(name, age)








