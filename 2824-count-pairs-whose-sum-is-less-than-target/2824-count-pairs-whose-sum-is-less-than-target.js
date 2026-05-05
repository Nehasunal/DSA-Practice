/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let count= 0
    nums.sort((a,b)=> a-b)
    let i=0
    let j=nums.length-1
    let sum =0
    while(i<j){
        sum = nums[i] + nums[j]
        if(sum < target){
            count = count+(j-i)
            i++
        }else{
            j--
        }
    }
    return count
};