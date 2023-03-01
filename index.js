// Bubble Sort
// it will just compare one element with adjacent element and if its bigger then move to right so
// in 1 iteration the bigger number will be sorted and in 2nd iteration 2nd bigger will be in position and so on...
function BubbleSort(input) {
  for (let i = input.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (input[j] > input[j + 1]) {
        let temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  return input;
}

// console.log(BubbleSort([3, 6, 1, 2, 5]));

// Selection Sort
// it will take the 1st and adjacent element and compare if its smaller then swap and if not then move to next so in
// 1st iteration smallest element will be sorted and in the 2nd iteration 2nd smaller will be in position and so on...
function SelectionSort(array) {
  let min;
  for (let i = 0; i < array.length; i++) {
    min = i;
    // starting from +1 so taking  <array.length not  <array.length -1
    for (let nextItem = i + 1; nextItem < array.length; nextItem++) {
      if (array[min] > array[nextItem]) {
        min = nextItem;
      }
    }
    if (min != i) {
      let temp = array[min]; // 1
      array[min] = array[i]; // 1 = 4
      array[i] = temp; // 4 = 1
    }
  }
  return array;
}

console.log(SelectionSort([4, 2, 6, 5, 1, 3]));

// Insertion Sort
// it will take the 2nd element and compare with previous element and also till the start so in 1st iteration
// 1st element will be at its position and in 2nd iteration 2nd smallest will be in position and so on....
function InsertionSort(array) {
  //let temp;
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    for (var j = i - 1; array[j] > temp && j >= 0; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(InsertionSort([4, 2, 6, 5, 7, 1, 3, 9]));
