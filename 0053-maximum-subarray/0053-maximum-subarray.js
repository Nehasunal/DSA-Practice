/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0) return 0;

    let currentMax = nums[0]; // max sum ending at current index
    let globalMax = nums[0];  // overall max sum

    for(let i = 1; i < nums.length; i++){
        // either extend previous subarray or start new from nums[i]
        currentMax = Math.max(nums[i], nums[i] + currentMax);
        globalMax = Math.max(globalMax, currentMax);
    }

    return globalMax;

};