/**
 * INSERTION SORT
 *
 * REMEMBER: Create a swap mechanism later
 * used when already sorted list
 */

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // first index in the array
    const temp = array[i];
    // gradually reducing index pointer
    let j = i - 1;

    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort([1, 3, 8, 2, 6, 9]));
