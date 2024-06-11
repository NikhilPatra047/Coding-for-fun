function fourSum(arr, target) {
  const newArr = [...arr].sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < newArr.length - 3; ++i) {
    if (i > 0 && newArr[i] === newArr[i - 1]) continue;
    for (let j = i + 1; j < newArr.length - 2; ++j) {
      if (j > i + 1 && newArr[j] === newArr[j - 1]) continue;

      let left = j + 1;
      let right = newArr.length - 1;

      while (left < right) {
        const sum = newArr[i] + newArr[j] + newArr[left] + newArr[right];

        if (sum === target) {
          result.push([newArr[i], newArr[j], newArr[left], newArr[right]]);

          // Skip the duplicates
          while (left < right && newArr[left] === newArr[left + 1]) left++;
          left++;

          // Skip the duplicates
          while (left < right && newArr[right] === newArr[right - 1]) right--;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}

function main() {
  console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
  console.log(fourSum([], 0));
  console.log(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11));
}

main();
