function partitionHoare(array, left, right) {
  const pivot = Math.floor(Math.random() * (right - left + 1) + left);
  while (left <= right) {
    while (array[left] < array[pivot]) {
      left++;
    }
    while (array[right] > array[pivot]) {
      right--;
    }
    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
    }
  }
  return left;
}

function quickSort(array, left, right) {
  left = left || 0;
  right = right || array.length - 1;

  const pivot = partitionHoare(array, left, right);

  if (left < pivot - 1) {
    quicksort(array, left, pivot - 1);
  }
  if (right > pivot) {
    quicksort(array, pivot, right);
  }
  return array;
}

console.log(quickSort([1, 5, 7, 3, 2, 4, 8, 6]));

/**
 *              TIME                                    SPACE
 *  best            average              worst           worst
 * O(n log(n))      O(n log(n))         O(n2)           O(n log(n))
 */
