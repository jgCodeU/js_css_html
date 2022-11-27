function shellSort(arr) {
    let len = arr.length
    for(let gap = Math.floor(len/2) ; gap > 0 ; gap = Math.floor(gap/2)) {
        for(let i = gap ; i < len ; i++) {
            let cur = arr[i]
            let j = i
            while(j - gap >= 0 && arr[j-gap] > cur) {
                arr[j] = arr[j-gap]
                j = j - gap
            }
            arr[j] = cur
        }
    }
    return arr
}