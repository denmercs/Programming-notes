/* this handles the partitioning the arrays */
function mergeSort(arr) {
  // check if the array has something inside it
  if (arr.length === 1) {
    return arr;
  }
  // divide the array by 2
  const middle = Math.floor(arr.length / 2);
  // get the left
  const left = arr.slice(0, middle);
  // get the right
  const right = arr.slice(middle);

  /// call merge function
  return merge(mergeSort(left), mergeSort(right));
}

/** this handles the merging o the seperated arrays */
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // check if the left index is lesser the left length
  // and right index is lesser the right length
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([1, 5, 4, 7, 9, 10, 2, 6]));

/**
 * TIME                                        SPACE
 * BEST          AVERAGE       WORST          WORST
 * O(nlog(n))   O(nlog(n))     O(nlog(n))      O(n)
 */
