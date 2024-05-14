// Write a function that takes in a list of length >= 3 and
// returns the maximum product that can be
// obtained by multiplying any three integers from the list.

function maxProduct(nums) {
  if (nums.length > 3) {
    nums = nums.sort();
    let max_product = -Infinity;

    for (let i = 0; i < nums.length - 2; ++i) {
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const product = nums[left] * nums[right] * nums[i];
        if (product > max_product) {
          max_product = product;
        }
        right--;
      }
    }

    return max_product;
  } else if (nums.length === 3) {
    return nums.reduce((acc, curr) => curr * acc, 1);
  }

  throw "Length of the array is less than 3. Please provide an array of length >= 3";
}

function main() {
  nums = [2, 4, 1, 3, -5, 6];
  result = maxProduct(nums);
  console.log(result);
}

main();
