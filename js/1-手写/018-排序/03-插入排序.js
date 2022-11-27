function insertSort(arr) {
  function swap(x, y) {
    let temp;
    temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
        if(j === 0) {
          arr[0] = temp
        }
      } else {
        arr[j+1] = temp;
        break;
      }
    }
  }

  return arr;
}
console.log(insertSort([3, 2, 4, 10, 1, 0]));
console.log(insertSort([20, 13, 18, 18, 9, 7, 10]));
console.log(insertSort([20, 13, 18, 18, 9, 7, 10, 3,2,1]));
