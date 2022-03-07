const data1 = 'zhangsan'
const data2 = 20
module.exports = {
    data1,
    data2
}
exports.data3 = '哈哈啊哈'
console.log('module.exports === exports',module.exports === exports)

console.log('module.id: ', module.id);
console.log('module.exports: ', module.exports);
console.log('module.parent: ', module.parent);
console.log('module.filename: ', module.filename);
console.log('module.loaded: ', module.loaded);
console.log('module.children: ', module.children);
console.log('module.paths: ', module.paths);
console.log('exports', exports)


console.log('-----------------')
const obj1 = {name:'lisi', age:21}
const obj2 = obj1
obj2.money = '¥1231313123123123'
console.log('obj1-obj2',obj1, obj2, obj1 === obj2)




