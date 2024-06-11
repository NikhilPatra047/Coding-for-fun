function fourSum(arr, target) {
  const newArr = [...arr].sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < newArr.length - 3; ++i) {
    if (i > 0 && newArr[i] === newArr[i - 1]) continue;
    for (let j = i + 1; j < newArr.length - 2; ++j) {
      if (j > i + 1 && newArr[j] === newArr[j - 1]) continue;

      let k = j + 1;
      let l = newArr.length - 1;

      while (k < l) {
        const sum = newArr[i] + newArr[j] + newArr[k] + newArr[l];

        if (sum === target) {
          result.push([newArr[i], newArr[j], newArr[k], newArr[l]]);

          // Skip the duplicates
          while (k < l && newArr[k] === newArr[k + 1]) k++;
          k++;

          // Skip the duplicates
          while (k < l && newArr[l] === newArr[l - 1]) l--;
          l--;
        } else if (sum < target) {
          k++;
        } else {
          l--;
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
