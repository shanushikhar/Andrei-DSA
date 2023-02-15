// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

const input = [3, 2, 4];
let target = 6;

function getValue(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] == target) {
      return [i, i + 1];
    }
  }
  return "not found";
}

const index = getValue(input);
console.log(index);
