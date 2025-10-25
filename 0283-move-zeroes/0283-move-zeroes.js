/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

  let lastNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // swap only if necessary
      [nums[i], nums[lastNonZero]] = [nums[lastNonZero], nums[i]];
      lastNonZero++;
    }
  }

  return nums; // for clarity (optional)

};