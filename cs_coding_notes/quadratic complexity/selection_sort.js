function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      // if first index is lesser than the minimum, set the minimum to that num
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  return array;
}

console.log(selectionSort([1, 3, 9, 4, 7, 2, 6, 8]));
