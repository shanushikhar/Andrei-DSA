let arr1 = [2, 5, 7];
let arr2 = [3, 6, 1];

function checkCommonItem(array1, array2) {
  let obj = {};
  for (let i = 0; i < array1.length; i++) {
    obj[array1[i]] = true;
  }
  for (let j = 0; j < array2.length; j++) {
    if (obj[array2[j]]) {
      return true;
    }
  }
  return false;
}

console.log(checkCommonItem(arr1, arr2));
