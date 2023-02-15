// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input: nums = [0]
// Output: [0]

let nums = [0, 1, 0, 3, 12];

function moveZeroinEnd(arr) {
  let arrayOfZero = [];
  let arrayWithoutZero = [];
  for (let x of arr) {
    if (x == 0) arrayOfZero.push(0);
    else arrayWithoutZero.push(x);
  }
  return [...arrayWithoutZero, ...arrayOfZero];
  //return arrayWithoutZero.concat(arrayOfZero);
}

const values = moveZeroinEnd(nums);
console.log(values);
