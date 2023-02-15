// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const items = [1, 2, 3, 2];

function containsDuplicate(arr) {
  let items = {};
  for (let i of arr) {
    if (items[i]) return [i, true];
    else {
      items[i] = true;
    }
  }
  return false;
}

const values = containsDuplicate(items);
console.log(values);
