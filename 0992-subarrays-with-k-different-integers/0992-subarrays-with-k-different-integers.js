/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
     return results(nums, k) - results(nums, k-1)
};

function results(nums,k){
    let map = new Map()
    let left = 0
    let count= 0
    for(let i=0;i<nums.length;i++){
        map.set(nums[i], (map.get(nums[i])||0) +1)
        while(map.size > k){
           map.set(nums[left], map.get(nums[left])-1)  
           if(map.get(nums[left]) === 0) map.delete(nums[left])
           left++
        }
        count = count + (i-left+1)
    }
    return count
}