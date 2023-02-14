let Array1 = [2, 5, 8, 10];
let Array2 = [11, 60, 122, 888];

function MergeSortedArray(arr1, arr2) {
  if (!arr1 || arr1.length < 1) return arr2;
  if (!arr2 || arr2.length < 1) return arr1;

  let firstArrayElement = arr1[0];
  let secondArrayElement = arr2[0];
  const sortedArray = [];
  let i = 1;
  let j = 1;

  while (firstArrayElement || secondArrayElement) {
    if (!secondArrayElement || firstArrayElement < secondArrayElement) {
      sortedArray.push(firstArrayElement);
      firstArrayElement = arr1[i];
      i++;
    } else {
      sortedArray.push(secondArrayElement);
      secondArrayElement = arr2[j];
      j++;
    }
  }

  return sortedArray;
}

const value = MergeSortedArray(Array1, Array2);
console.log(value);
