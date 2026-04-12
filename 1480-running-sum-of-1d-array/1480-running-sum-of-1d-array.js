/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let pSum = []
    pSum[0] = nums[0]
    for(let i=1;i< nums.length;i++){
        pSum[i] = nums[i] + pSum[i-1]
    }
    return pSum
};