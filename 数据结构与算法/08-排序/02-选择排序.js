// let arr = []

// function selectSort(arr) {
//   function swap(x, y) {
//     let temp;
//     temp = arr[x];
//     arr[x] = arr[y];
//     arr[y] = temp;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j
//       }
//     }
//     swap(i, minIndex);
//   }
//   return arr
// }
function selectSort(arr) {
  function swap(x, y) {
    let temp;
    temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  for(let i = 0 ; i < arr.length ; i ++) {
    let minIndex = i
    for(let j = i + 1 ; j < arr.length ; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap(i, minIndex)
  }
  return arr
}



console.log(selectSort([3, 2, 4, 10, 1, 0]),'--');
console.log(selectSort([20, 13, 18, 18, 9, 7, 10]));
