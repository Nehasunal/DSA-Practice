/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let j=0;
    let min = Infinity
    let sum=0
    for(let i=0; i<nums.length;i++){
        sum=sum+nums[i]
        while(sum >= target){
            min = Math.min(min, i-j+1)
            sum=sum-nums[j]
            j++
        }
    }
    return min === Infinity ? 0: min 
};