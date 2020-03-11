function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // get the first index
    let temp = arr[i];
    // decrement to get the last index
    let j = i - 1;
    // loop if j is equal to 0 and last index is greater than the first
    while (j >= 0 && arr[j] > temp) {
      // set the second index to the first
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

console.log(insertionSort([1, 3, 9, 8, 4]));
