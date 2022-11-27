// let arr = []

function bubbleSort(arr) {
  function swap(x, y) {
    let temp;
    temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  for (let i = 0; i <= arr.length - 2; i++) {
    for (let j = 0; j <= arr.length - i - 2; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);
      } else {
        continue
      }
    }
  }
  return arr
}
console.log(bubbleSort([3,2,4,10,1,0]))
