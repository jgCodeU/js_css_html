// 情况一：核心模块
// const path = require("path")
// const fs = require("fs")

// const { default: axios } = require("axios");

// 情况二：路径requore(X)
// 没有后缀名时，查找顺序：文件X->X.js->X.json->X.node
// 没有找到当以上文件时，将X作为一个目录，查找目录中的index文件（index.js->index.json->index.node）


//情况三：X不是路径，也不是核心模块
// require('part')
// console.log(module.paths)
const axios = require("axios")
console.log(axios)









