function quickSort(arr) {
    if(!arr.length) return []
    let lower = [], equo = [], higher = []
    let stander = arr[0]
    for(let i = 0 ; i < arr.length ; i++) {
        arr[i] < stander && lower.push(arr[i]);
        arr[i] === stander && equo.push(arr[i]);
        arr[i] > stander && higher.push(arr[i]);
    }
    return [...quickSort(lower), ...equo, ...quickSort(higher)]
}
console.log('快排', quickSort([3, 2, 4, 10, 1, 0]));
console.log('快排', quickSort([20, 13, 18, 18, 9, 7, 10]));
console.log('快排', quickSort([20, 13, 18, 18, 9, 7, 10, 3,2,1]));

