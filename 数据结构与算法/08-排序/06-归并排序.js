// // 对左右数组进行排序并合并
// function merge(left, right) {
//   let arr = [];
//   // 此条件代表当有一个数组为空之后，则停止循环
//   while (left.length && right.length) {
//     // 从左右子数组的最小元素中选择较小的元素 push 到 arr
//     if (left[0] > right[0]) {
//       arr.push(right.shift());
//     } else {
//       arr.push(left.shift());
//     }
//   }
//   // 输出的数组要加上 left 或 right 剩下的值，由于每次都 push 最小值，则剩余的一定是大值，所以 push 到最后
//   // 由于 left 和 right length 可能为相等或相差 1，所以这里 left 和 right 不分先后
//   return [...arr, ...left, ...right];
// }

// // 此方法主要是将数组分为左右两个数组，后再调用 merge 方法进行左右数组的合并
// function mergeSort(arr) {
//   // 1. 当数组元素小于 2 个，则无需排序，直接返回,因为要递归要用此函数，所以这里必须加递归调用的出口
//   if (arr.length < 2) {
//     return arr;
//   }
//   // 2. 获取数组中间值，无需取整，splice 会以向下取整截取
//   const half = arr.length / 2;
//   // 3. 截取数组前一半
//   const left = arr.splice(0, half);
//   // 4. 剩余为数组右半边
//   const right = arr;
//   // 5. 返回合并和排序后的数组
//   return merge(mergeSort(left), mergeSort(right));
// }
// console.log(mergeSort([2,1]))
// console.log(mergeSort([5,4,3,2,2,1]))



//缺点：创建许多额外的内存空间
function mergeSort(arr) {
    if(arr.length < 2) return arr
    let left, right
    left = arr.splice(0, arr.length/2)
    right = arr
    return merge(mergeSort(left), mergeSort(right))
}         
function merge(left, right) {
    let arr = []
    while(left.length && right.length) {
        left[0] > right[0] ? arr.push(right.shift()) : arr.push(left.shift())
    }
    return [...arr, ...left, ...right]
}
console.log(mergeSort([2,1]))
console.log(mergeSort([5,4,3,2,2,1]))