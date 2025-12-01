/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxCount= nums[0]
  let count = nums[0]
  for(let i=1;i<nums.length;i++){
     count = Math.max(nums[i]+count, nums[i])
     maxCount = Math.max(count, maxCount)
  }

  return maxCount

};