/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let left = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === 0){
        left = i+1
    }
    maxCount = Math.max(maxCount, i-left+1)
  }

  return maxCount;
};