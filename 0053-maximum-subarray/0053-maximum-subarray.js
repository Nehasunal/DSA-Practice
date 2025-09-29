/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length===1){
        return nums[0]
    }
    let arr = []
    arr[0] = nums[0]
    arr[1] = Math.max(nums[0]+nums[1], nums[1])
    let maxCount = Math.max(arr[0],arr[1])

    for(let i=2;i<nums.length;i++){
       let sum = Math.max(nums[i] + arr[i-1], nums[i])
       arr.push(sum)
       maxCount = Math.max(sum,maxCount)
    }
    return maxCount

};