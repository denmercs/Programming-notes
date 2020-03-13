/**
 * INSERTION SORT
 *
 * REMEMBER: Create a swap mechanism later
 * used when already sorted list
 */

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // set the first index of the array
    let temp = array[i];
    // set the last index of the array
    let j = i - 1;
    // loop them if j > 0 and last index is greater than first
    while (j >= 0 && array[j] > temp) {
      // set the second index to the first
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort([1, 3, 8, 2, 6, 9]));

/**
 *  TIME                    SPACE
 *  Best  Average   Worst   Worst
 * O(n)   O(n2)     O(n2)   O(1)
 */
