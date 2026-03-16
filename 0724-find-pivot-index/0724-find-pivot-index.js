/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftsum = 0
    let totalsum = nums.reduce((acc,curr)=> { return acc+curr}, 0)
    for(let i=0;i< nums.length;i++){
        totalsum = totalsum - nums[i]
        if(leftsum === totalsum){
            return i
        }
        leftsum = leftsum + nums[i]
    }
    return -1
};