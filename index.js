function Swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

// this function rearrane the array and return the swapIndex
function Pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      Swap(array, swapIndex, i);
    }
  }
  Swap(array, pivotIndex, swapIndex);
  return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = Pivot(array, left, right);
    // console.log(pivotIndex); // 3
    Pivot(array, left, pivotIndex - 1);
    Pivot(array, pivotIndex + 1, right);
  }
  return array;
}

console.log(quickSort([4, 6, 1, 7, 3, 2, 5]));
